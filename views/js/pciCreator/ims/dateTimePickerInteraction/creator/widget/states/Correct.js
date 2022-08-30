define([
    'taoQtiItem/qtiCreator/widgets/states/factory',
    'taoQtiItem/qtiCreator/widgets/interactions/states/Correct',
], function(stateFactory, Correct) {
    'use strict';

    const stateCorrect = stateFactory.extend(
        Correct,
        function enterCorrectState() {
            const interaction = this.widget.element;
            const responseDeclaration = interaction.getResponseDeclaration();
            const correct = Object.values(responseDeclaration.getCorrect() || {});

            // show correct response in liquid container.
            if (typeof correct[0] !== 'undefined') {
                interaction.setResponse( { base: { string: correct[0] } });
            }

            const inputElement = this.widget.$container.find('.date-time-picker-interaction input').get(0);
            inputElement.addEventListener('change', () => {
                const correctResponse = [];

                correctResponse.push(inputElement.value);

                responseDeclaration.setCorrect(correctResponse);
            });
        },
        function leaveCorrectState() { }
    );
    return stateCorrect;
});

