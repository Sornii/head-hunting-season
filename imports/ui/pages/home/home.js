import {Template} from "meteor/templating";
import {FlowRouter} from "meteor/kadira:flow-router";
import {ActiveRoute} from "meteor/zimme:active-route";

import "./home.html";

Template.home.onRendered(function homeOnRendered() {

});

Template.home.onCreated(function homeOnCreated() {

});

Template.home.helpers({
    daysMessage() {
        return "Hello World!";
    }
});

