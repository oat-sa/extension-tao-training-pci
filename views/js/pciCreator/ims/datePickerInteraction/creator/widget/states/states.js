define([
    'taoQtiItem/qtiCreator/widgets/states/factory',
    'taoQtiItem/qtiCreator/widgets/interactions/customInteraction/states/states',
    'datePickerInteraction/creator/widget/states/Question'
], function (factory, states, QuestionState) {
    'use strict';
    return factory.createBundle(states, [QuestionState], ['answer', 'correct', 'map']);
});
