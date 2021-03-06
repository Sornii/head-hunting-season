import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ActiveRoute } from 'meteor/zimme:active-route';
import { ReactiveVar } from 'meteor/reactive-var';

import { fabricarItem } from '../../../api/receitas/methods';

import './receita.html';
import HomemModal from "../homensDisponiveis/homemModal";

Template.receita.onCreated(function receitaOnCreated() {
  this.homemModal = new HomemModal();
  this.quantidadeFabricar = new ReactiveVar();
});

Template.receita.helpers({
  quantidadeFabricar() {
    const instance = Template.instance();
    return instance.quantidadeFabricar.get();
  }
});

Template.receita.events({
  'change input, keyup input': function (event, instance) {
    instance.quantidadeFabricar.set(event.target.value);
  },
  'click button': function (event, instance) {
    event.preventDefault();

    const receitaId = this._id;
    const quantidade = Number(instance.quantidadeFabricar.get());

    instance.homemModal.definir(function (homem) {
      const homemId = homem._id;
      fabricarItem.call({homemId, receitaId, quantidade});
    });

    instance.homemModal.mostrar();
  }
});