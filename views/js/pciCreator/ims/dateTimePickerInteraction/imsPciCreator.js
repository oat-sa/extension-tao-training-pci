define(['taoQtiItem/qtiCreator/widgets/interactions/customInteraction/Widget'], function (Widget) {
    'use strict';

    return {
        /**
        * (required) Get the typeIdentifier of the custom interaction
        *
        * @returns {String}
        */
        getTypeIdentifier() {
            return 'dateTimePickerInteraction';
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
            return {};
        },

        /**
         * (optional) Callback to execute on the
         * Used on new pci instance creation
         *
         * @returns {Object}
         */
        afterCreatedt() {},

        /**
         * (required) Gives the qti pci xml template
         *
         * @returns {function} handlebar template
         */
        getMarkupTemplate() {
            return  () => '<div class="date-time-picker-interaction"></div>';
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
