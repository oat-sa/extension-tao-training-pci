define([
    'qtiCustomInteractionContext',
], function (qtiCustomInteractionContext) {
    'use strict';

    qtiCustomInteractionContext.register({
        typeIdentifier: 'datePickerInteraction',

        getInstance(dom, config, state) {

            let selectedDate = null;

            const response = config.boundTo;
            const responseIdentifier = Object.keys(response)[0];
            if (response && response[responseIdentifier] && response[responseIdentifier].base) {
                selectedDate = response[responseIdentifier].base.string;
            }

            //build picker
            const label = document.createElement('label');
            label.textContent = 'Pick a date';
            const picker = document.createElement('input');
            picker.type= 'date';
            if(config.properties.minDate) {
                picker.setAttribute('min', config.properties.minDate);
            }
            if(config.properties.maxDate) {
                picker.setAttribute('max', config.properties.maxDate);
            }

            label.appendChild(picker);
            dom.querySelector('.date-picker-interaction').appendChild(label);

            //handle events
            const changeHandler = () => selectedDate = picker.value;
            picker.addEventListener('change', changeHandler);

            const myInteraction = {

                getResponse() {
                    if(!selectedDate) {
                        return { base: null };
                    }
                    return { base : { string : selectedDate } };
                },

                getState() {
                    if(!selectedDate) {
                        return { response : { base : null } };
                    }
                    return { response : { base : { string : selectedDate } } };
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
