define([
    'taoQtiItem/qtiCreator/widgets/interactions/customInteraction/Widget',
    'datePickerInteraction/creator/widget/states/states',
], function (Widget, states) {
    'use strict';

    const DatePickerInteractionWidget = Widget.clone();

    DatePickerInteractionWidget.initCreator = function () {
        this.registerStates(states);
        Widget.initCreator.call(this);
    };

    return DatePickerInteractionWidget;
});
