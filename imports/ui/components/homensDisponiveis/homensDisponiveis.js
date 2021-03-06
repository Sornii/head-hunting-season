import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ActiveRoute } from 'meteor/zimme:active-route';

import './homensDisponiveis.html';

import './homemDisponivel/homemDisponivel';
import { Homens } from "../../../api/homens/homens";
import HomemModal from "./homemModal";

Template.homensDisponiveis.onCreated(function homensDisponiveisOnCreated() {

});

Template.homensDisponiveis.onRendered(function homensDisponiveisOnRendered() {
  this.homemModal = new HomemModal();
});

Template.homensDisponiveis.helpers({
  homens() {
    return Homens.find({ ocupado: false });
  }
});

Template.homensDisponiveis.events({

});