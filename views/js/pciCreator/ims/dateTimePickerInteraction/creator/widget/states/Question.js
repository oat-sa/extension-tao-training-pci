define([
    'taoQtiItem/qtiCreator/widgets/states/factory',
    'taoQtiItem/qtiCreator/widgets/interactions/states/Question',
    'taoQtiItem/qtiCreator/widgets/helpers/formElement',
], function(stateFactory, Question, formElement) {
    'use strict';
    var stateQuestion = stateFactory.extend(
        Question,
        function() {
            console.log('init question state');
        },
        function() {
            console.log('destroy question state');
        }
    );


    stateQuestion.prototype.initForm = function() {
        const interaction = this.widget.element;
        const $form = this.widget.$form;
        const element = this.widget.$container.find('.date-time-picker-interaction').get(0);

        //render the form using the
        this.widget.$form.html(
            `
<div class="panel">
    <label for="minDate" class="has-icon">Min Date</label>
    <span class="icon-help tooltipstered" data-tooltip="~ .tooltip-content:first" data-tooltip-theme="info"></span>
    <div class="tooltip-content">Only date after can be selected</div>
    <input type="text" name="minDate" value=${interaction.properties.minDate} />
</div>

<div class="panel">
    <label for="minDate" class="has-icon">Max Date</label>
    <span class="icon-help tooltipstered" data-tooltip="~ .tooltip-content:first" data-tooltip-theme="info"></span>
    <div class="tooltip-content">Only date before can be selected</div>
    <input type="text" name="maxDate" value=${interaction.properties.maxDate} />
</div>

`
        );

        //init form javascript
        formElement.initWidget(this.widget.$form);

        //init data change callbacks
        formElement.setChangeCallbacks($form, interaction, {
            minDate(i, value) {
                i.properties.minDate = value;
                console.log('props', i.properties);
                element.dispatchEvent(new CustomEvent('configChange', { detail : i.properties }));
            },
            maxDate(i, value) {
                i.properties.maxDate = value;
                console.log('props', i.properties);
                element.dispatchEvent(new CustomEvent('configChange', { detail : i.properties }));
            },
        });
    };
    return stateQuestion;
});

