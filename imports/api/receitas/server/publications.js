import { Meteor } from 'meteor/meteor';
import { Receitas } from '../receitas';
import { Itens } from '../../itens/itens';
import { _ } from 'underscore';

Meteor.publishComposite('receitas', function () {
  return {
    find() {
      return Receitas.find({});
    },
    children: [
      {
        find(receita) {
          return Itens.find({_id: {$in: _.map(receita._itens, item => item.itemId)}});
        }
      },
      {
        find(receita) {
          return Itens.find({_id: receita.itemId});
        }
      }
    ]
  };
});