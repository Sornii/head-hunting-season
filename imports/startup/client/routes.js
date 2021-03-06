import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

//layouts
import '../../ui/layouts/app-body';

//paginas
import '../../ui/pages/home/home';

//componentes
import '../../ui/components/venda/venda';
import '../../ui/components/compra/compra';
import '../../ui/components/receita/receita';
import '../../ui/components/bando/bando';

FlowRouter.route('/', {
  name: 'home',
  action: () => BlazeLayout.render('App_body', {content: 'home'})
});