define([
    'taoQtiItem/qtiCreator/widgets/interactions/customInteraction/Widget',
    'dateTimePickerInteraction/creator/widget/states/states',
], function (Widget, states) {
    'use strict';

    const DateTimePickerInteractionWidget = Widget.clone();

    DateTimePickerInteractionWidget.initCreator = function () {
        this.registerStates(states);
        Widget.initCreator.call(this);
    };

    return DateTimePickerInteractionWidget;
});
