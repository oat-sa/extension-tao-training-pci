define([
    'taoQtiItem/qtiCreator/widgets/states/factory',
    'taoQtiItem/qtiCreator/widgets/interactions/customInteraction/states/states',
    'dateTimePickerInteraction/creator/widget/states/Question',
    'dateTimePickerInteraction/creator/widget/states/Answer',
    'dateTimePickerInteraction/creator/widget/states/Correct',
], function (factory, states, questionState, answerState, correctState) {
    'use strict';
    return factory.createBundle(states, [questionState, answerState, correctState], ['map']);
});
