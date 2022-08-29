define([
    'qtiCustomInteractionContext',
    'dateTimePickerInteraction/runtime/flatpickr',
    'css!amdPickerInteraction/runtime/flatpickr.min.css'
], function (qtiCustomInteractionContext, flatpickr) {
    'use strict';

    qtiCustomInteractionContext.register({
        typeIdentifier: 'dateTimePickerInteraction',

        getInstance(dom, config, state) {

            let selectedDateTime = null;
            let flatpickrInstance = null;

            const response = config.boundTo;
            const responseIdentifier = Object.keys(response)[0];
            if (response && response[responseIdentifier] && response[responseIdentifier].base) {
                selectedDateTime = response[responseIdentifier].base.string;
            }

            //build picker
            const label = document.createElement('label');
            label.textContent = 'Pick a date';
            const picker = document.createElement('input');
            picker.type= 'text';

            label.appendChild(picker);
            dom.querySelector('.date-time-picker-interaction').appendChild(label);

            const myInteraction = {

                getResponse() {
                    if (!selectedDateTime) {
                        return { base: null };
                    }
                    return { base : { string : selectedDateTime } };
                },

                getState() {
                    if (!selectedDateTime) {
                        return { response : { base : null } };
                    }
                    return { response : { base : { string : selectedDateTime } } };
                },

                oncompleted() {
                    if (flatpickrInstance){
                        flatpickrInstance.destroy();
                    }
                }
            };

            flatpickrInstance = flatpickr(picker, {
                enableTime: true,
                minDate: config.properties.minDate,
                maxDate: config.properties.maxDate,
                onChange(selectedDates, dateStr) {
                    selectedDateTime = dateStr;
                },
                onReady() {
                    document.querySelector('.flatpickr-calendar').style.zIndex = 100000;
                    config.onready(myInteraction);
                }
            });
        }
    });
});
