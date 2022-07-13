define([
    'qtiCustomInteractionContext',
], function (qtiCustomInteractionContext) {
    'use strict';

    qtiCustomInteractionContext.register({
        typeIdentifier: 'dateTimePickerInteraction',

        getInstance(dom, config, state) {

            let selectedDatetime = null;

            const response = config.boundTo;
            const responseIdentifier = Object.keys(response)[0];
            if (response && response[responseIdentifier] && response[responseIdentifier].base) {
                selectedDatetime = response[responseIdentifier].base.string;
            }

            const label = document.createElement('label');
            label.textContent = 'Pick a date';
            const picker = document.createElement('input');
            picker.type= 'datetime-local';

            label.appendChild(picker);
            dom.querySelector('.date-time-picker-interaction').appendChild(label);

            const changeHandler = () => selectedDatetime = picker.value;
            picker.addEventListener('change', changeHandler);


            const myInteraction = {

                getResponse() {
                    if(!selectedDatetime) {
                        return { base: null };
                    }
                    return { base : { string : selectedDatetime } };
                },

                getState() {
                    if(!selectedDatetime) {
                        return { response : { base : null } };
                    }
                    return { response : { base : { string : selectedDatetime } } };
                },

                oncompleted() {
                    if(picker){
                        picker.removeEventListener('change', changeHandler);
                    }
                }
            };

            config.onready(myInteraction);
        }
    });
});
