angular.module('n.ui.foundation.tpls', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('uib/template/accordion/accordion-group.html',
    "<div role=\"tab\" id=\"{{::headingId}}\" aria-selected=\"{{isOpen}}\" class=\"accordion-item\" ng-class=\"{'is-active': isOpen}\" ng-keypress=\"toggleOpen($event)\">\r" +
    "\n" +
    "        <a role=\"button\" class=\"accordion-title\" data-toggle=\"collapse\" aria-expanded=\"{{isOpen}}\" aria-controls=\"{{::panelId}}\" tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" uib-accordion-transclude=\"heading\" ng-disabled=\"isDisabled\" uib-tabindex-toggle>\r" +
    "\n" +
    "            <span uib-accordion-header ng-class=\"{'text-muted': isDisabled}\">\r" +
    "\n" +
    "                {{heading}}\r" +
    "\n" +
    "            </span>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    <!--</h4>-->\r" +
    "\n" +
    "    <div id=\"{{::panelId}}\" aria-labelledby=\"{{::headingId}}\" aria-hidden=\"{{!isOpen}}\" role=\"tabpanel\" uib-collapse=\"!isOpen\">\r" +
    "\n" +
    "        <div class=\"accordion-content\" ng-transclude></div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('uib/template/accordion/accordion.html',
    "<div role=\"tablist\" class=\"accordion\" ng-transclude></div>"
  );


  $templateCache.put('uib/template/alert/alert.html',
    "<button class=\"close-button\" aria-label=\"Dismiss alert\" type=\"button\" ng-show=\"closeable\" ng-click=\"close({$event: $event})\">\r" +
    "\n" +
    "    <span aria-hidden=\"true\">&times;</span>\r" +
    "\n" +
    "</button>\r" +
    "\n" +
    "<div ng-transclude></div>"
  );


  $templateCache.put('uib/template/modal/window.html',
    "<div class=\"reveal {{size ? size : ''}}\" uib-modal-transclude>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('uib/template/pager/pager.html',
    "<li class=\"pagination-previous\" ng-class=\"{'disabled':noPrevious()||ngDisabled}\">\r" +
    "\n" +
    "    <a ng-click=\"selectPage(page - 1, $event)\" ng-disabled=\"noPrevious()||ngDisabled\" uib-tabindex-toggle>\r" +
    "\n" +
    "        {{::getText('previous')}} <span class=\"show-for-sr\">page</span>\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</li>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<li class=\"pagination-next\" ng-class=\"{disabled: noNext()||ngDisabled, next: align}\">\r" +
    "\n" +
    "    <a ng-click=\"selectPage(page + 1, $event)\" ng-disabled=\"noNext()||ngDisabled\" uib-tabindex-toggle>\r" +
    "\n" +
    "        {{::getText('next')}}\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "</li>"
  );


  $templateCache.put('uib/template/pagination/pagination.html',
    "<li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-previous\">\r" +
    "\n" +
    "    <a ng-click=\"selectPage(1, $event)\" ng-disabled=\"noPrevious()||ngDisabled\" uib-tabindex-toggle>\r" +
    "\n" +
    "        {{::getText('first')}}\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "</li>\r" +
    "\n" +
    "<li ng-if=\"::directionLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-previous\">\r" +
    "\n" +
    "    <a ng-click=\"selectPage(page - 1, $event)\" ng-disabled=\"noPrevious()||ngDisabled\" uib-tabindex-toggle>\r" +
    "\n" +
    "        {{::getText('previous')}}\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "</li>\r" +
    "\n" +
    "<li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active,disabled: ngDisabled&&!page.active}\" class=\"pagination-page\">\r" +
    "\n" +
    "    <a ng-click=\"selectPage(page.number, $event)\" ng-disabled=\"ngDisabled&&!page.active\" uib-tabindex-toggle>\r" +
    "\n" +
    "        {{page.text}}\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "</li>\r" +
    "\n" +
    "<li ng-if=\"::directionLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-next\">\r" +
    "\n" +
    "    <a ng-click=\"selectPage(page + 1, $event)\" ng-disabled=\"noNext()||ngDisabled\" uib-tabindex-toggle>\r" +
    "\n" +
    "        {{::getText('next')}}\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "</li>\r" +
    "\n" +
    "<li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-next\">\r" +
    "\n" +
    "    <a ng-click=\"selectPage(totalPages, $event)\" ng-disabled=\"noNext()||ngDisabled\" uib-tabindex-toggle>\r" +
    "\n" +
    "        {{::getText('last')}}\r" +
    "\n" +
    "    </a>\r" +
    "\n" +
    "</li>"
  );

}]);
