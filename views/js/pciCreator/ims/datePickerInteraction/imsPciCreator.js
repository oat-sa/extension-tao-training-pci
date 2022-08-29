define(['datePickerInteraction/creator/widget/Widget'], function (Widget) {
    'use strict';

    const typeIdentifier = 'datePickerInteraction';

    return {
        /**
        * (required) Get the typeIdentifier of the custom interaction
        *
        * @returns {String}
        */
        getTypeIdentifier() {
            return typeIdentifier;
        },

        /**
         * (required) Get the widget prototype
         * Used in the renderer
         *
         * @returns {Object} Widget
         */
        getWidget() {
            return Widget;
        },

        /**
         * (optional) Get the default properties values of the pci.
         * Used on new pci instance creation
         *
         * @returns {Object}
         */
        getDefaultProperties() {
            return {
                minDate: false,
                maxDate: false
            };
        },

        /**
         * (optional) Callback to execute on the
         * Used on new pci instance creation
         *
         * @returns {Object}
         */
        afterCreatedt() {},

        /**
         * (required) Gives the qti pci markup template
         *
         * @returns {function} template function
         */
        getMarkupTemplate() {
            return  () => '<div class="date-picker-interaction"></div>';
        },

        /**
         * (optional) Allows passing additional data to xml template
         *
         * @returns {function} handlebar template
         */
        getMarkupData(pci, defaultData) {
            return defaultData;
        }
    };
});
