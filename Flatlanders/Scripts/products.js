(function () {
    var productModule = angular.module("store-products", []);

    productModule.directive("productTitle", function () {
        return {
            restrict: 'A',
            templateUrl: 'product-title.html'
        };
    });

    productModule.directive('productPanels', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function () {
                this.selectedTab = 1; //Initialize the selectedTab.
                this.selectTab = function (tabToSelect) {
                    this.selectedTab = tabToSelect;
                };
                this.isSelected = function (tabToCheck) {
                    return this.selectedTab === tabToCheck;
                };
            },
            controllerAs: 'panel'
        };
    });

    productModule.directive("productGallery", function () {
        return {
            restrict: "E",
            templateUrl: "product-gallery.html",
            controller: function () {
                this.current = 0;
                this.setCurrent = function (imageNumber) {
                    this.current = imageNumber || 0;
                };
            },
            controllerAs: "gallery"
        };
    });


    productModule.directive("productSpecs", function () {
        return {
            restrict: "E",
            templateUrl: "product-specs.html"
        };
    });
})();