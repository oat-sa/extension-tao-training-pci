define([
    'qtiCustomInteractionContext',
    'dateTimePickerInteraction/runtime/flatpickr',
    'css!dateTimePickerInteraction/runtime/flatpickr.min.css'
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
            const container = dom.querySelector('.date-time-picker-interaction');
            const label = document.createElement('label');
            label.textContent = 'Select a date : ';
            const picker = document.createElement('input');
            picker.type= 'text';

            label.appendChild(picker);
            container.appendChild(label);

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
                },

                /* internal methods */

                render({ minDate, maxDate } = {}) {
                    return new Promise( resolve => {
                        if (flatpickrInstance) {
                            flatpickrInstance.destroy();
                        }

                        flatpickrInstance = flatpickr(picker, {
                            enableTime: true,
                            minDate,
                            maxDate,
                            onChange(selectedDates, dateStr) {
                                selectedDateTime = dateStr;
                                setTimeout(() => picker.dispatchEvent(new Event('change')), 1);
                            },
                            onReady() {
                                document.querySelector('.flatpickr-calendar').style.zIndex = 100000;
                                resolve();
                            }
                        });
                    });
                }
            };

            container.addEventListener('configChange', e => myInteraction.render(e.detail));

            myInteraction.render(config.properties)
                .then( () => config.onready(myInteraction) );
        }
    });
});
