System.registerDynamic('npm:react@15.4.2/react.js', ['npm:react@15.4.2/lib/React.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  module.exports = $__require('npm:react@15.4.2/lib/React.js');
});
System.registerDynamic("npm:react@15.4.2.js", ["npm:react@15.4.2/react.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:react@15.4.2/react.js");
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ARIADOMPropertyConfig.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ARIADOMPropertyConfig = {
    Properties: {
      // Global States and Properties
      'aria-current': 0, // state
      'aria-details': 0,
      'aria-disabled': 0, // state
      'aria-hidden': 0, // state
      'aria-invalid': 0, // state
      'aria-keyshortcuts': 0,
      'aria-label': 0,
      'aria-roledescription': 0,
      // Widget Attributes
      'aria-autocomplete': 0,
      'aria-checked': 0,
      'aria-expanded': 0,
      'aria-haspopup': 0,
      'aria-level': 0,
      'aria-modal': 0,
      'aria-multiline': 0,
      'aria-multiselectable': 0,
      'aria-orientation': 0,
      'aria-placeholder': 0,
      'aria-pressed': 0,
      'aria-readonly': 0,
      'aria-required': 0,
      'aria-selected': 0,
      'aria-sort': 0,
      'aria-valuemax': 0,
      'aria-valuemin': 0,
      'aria-valuenow': 0,
      'aria-valuetext': 0,
      // Live Region Attributes
      'aria-atomic': 0,
      'aria-busy': 0,
      'aria-live': 0,
      'aria-relevant': 0,
      // Drag-and-Drop Attributes
      'aria-dropeffect': 0,
      'aria-grabbed': 0,
      // Relationship Attributes
      'aria-activedescendant': 0,
      'aria-colcount': 0,
      'aria-colindex': 0,
      'aria-colspan': 0,
      'aria-controls': 0,
      'aria-describedby': 0,
      'aria-errormessage': 0,
      'aria-flowto': 0,
      'aria-labelledby': 0,
      'aria-owns': 0,
      'aria-posinset': 0,
      'aria-rowcount': 0,
      'aria-rowindex': 0,
      'aria-rowspan': 0,
      'aria-setsize': 0
    },
    DOMAttributeNames: {},
    DOMPropertyNames: {}
  };

  module.exports = ARIADOMPropertyConfig;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/FallbackCompositionState.js', ['npm:object-assign@4.1.1.js', 'npm:react-dom@15.4.2/lib/PooledClass.js', 'npm:react-dom@15.4.2/lib/getTextContentAccessor.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var _assign = $__require('npm:object-assign@4.1.1.js');
  var PooledClass = $__require('npm:react-dom@15.4.2/lib/PooledClass.js');
  var getTextContentAccessor = $__require('npm:react-dom@15.4.2/lib/getTextContentAccessor.js');
  function FallbackCompositionState(root) {
    this._root = root;
    this._startText = this.getText();
    this._fallbackText = null;
  }
  _assign(FallbackCompositionState.prototype, {
    destructor: function () {
      this._root = null;
      this._startText = null;
      this._fallbackText = null;
    },
    getText: function () {
      if ('value' in this._root) {
        return this._root.value;
      }
      return this._root[getTextContentAccessor()];
    },
    getData: function () {
      if (this._fallbackText) {
        return this._fallbackText;
      }
      var start;
      var startValue = this._startText;
      var startLength = startValue.length;
      var end;
      var endValue = this.getText();
      var endLength = endValue.length;
      for (start = 0; start < startLength; start++) {
        if (startValue[start] !== endValue[start]) {
          break;
        }
      }
      var minEnd = startLength - start;
      for (end = 1; end <= minEnd; end++) {
        if (startValue[startLength - end] !== endValue[endLength - end]) {
          break;
        }
      }
      var sliceTail = end > 1 ? 1 - end : undefined;
      this._fallbackText = endValue.slice(start, sliceTail);
      return this._fallbackText;
    }
  });
  PooledClass.addPoolingTo(FallbackCompositionState);
  module.exports = FallbackCompositionState;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/SyntheticCompositionEvent.js', ['npm:react-dom@15.4.2/lib/SyntheticEvent.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var SyntheticEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticEvent.js');
  var CompositionEventInterface = { data: null };
  function SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticEvent.augmentClass(SyntheticCompositionEvent, CompositionEventInterface);
  module.exports = SyntheticCompositionEvent;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/SyntheticInputEvent.js', ['npm:react-dom@15.4.2/lib/SyntheticEvent.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var SyntheticEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticEvent.js');
  var InputEventInterface = { data: null };
  function SyntheticInputEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticEvent.augmentClass(SyntheticInputEvent, InputEventInterface);
  module.exports = SyntheticInputEvent;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/BeforeInputEventPlugin.js', ['npm:react-dom@15.4.2/lib/EventPropagators.js', 'npm:fbjs@0.8.9/lib/ExecutionEnvironment.js', 'npm:react-dom@15.4.2/lib/FallbackCompositionState.js', 'npm:react-dom@15.4.2/lib/SyntheticCompositionEvent.js', 'npm:react-dom@15.4.2/lib/SyntheticInputEvent.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var EventPropagators = $__require('npm:react-dom@15.4.2/lib/EventPropagators.js');
  var ExecutionEnvironment = $__require('npm:fbjs@0.8.9/lib/ExecutionEnvironment.js');
  var FallbackCompositionState = $__require('npm:react-dom@15.4.2/lib/FallbackCompositionState.js');
  var SyntheticCompositionEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticCompositionEvent.js');
  var SyntheticInputEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticInputEvent.js');
  var END_KEYCODES = [9, 13, 27, 32];
  var START_KEYCODE = 229;
  var canUseCompositionEvent = ExecutionEnvironment.canUseDOM && 'CompositionEvent' in window;
  var documentMode = null;
  if (ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
    documentMode = document.documentMode;
  }
  var canUseTextInputEvent = ExecutionEnvironment.canUseDOM && 'TextEvent' in window && !documentMode && !isPresto();
  var useFallbackCompositionData = ExecutionEnvironment.canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);
  function isPresto() {
    var opera = window.opera;
    return typeof opera === 'object' && typeof opera.version === 'function' && parseInt(opera.version(), 10) <= 12;
  }
  var SPACEBAR_CODE = 32;
  var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);
  var eventTypes = {
    beforeInput: {
      phasedRegistrationNames: {
        bubbled: 'onBeforeInput',
        captured: 'onBeforeInputCapture'
      },
      dependencies: ['topCompositionEnd', 'topKeyPress', 'topTextInput', 'topPaste']
    },
    compositionEnd: {
      phasedRegistrationNames: {
        bubbled: 'onCompositionEnd',
        captured: 'onCompositionEndCapture'
      },
      dependencies: ['topBlur', 'topCompositionEnd', 'topKeyDown', 'topKeyPress', 'topKeyUp', 'topMouseDown']
    },
    compositionStart: {
      phasedRegistrationNames: {
        bubbled: 'onCompositionStart',
        captured: 'onCompositionStartCapture'
      },
      dependencies: ['topBlur', 'topCompositionStart', 'topKeyDown', 'topKeyPress', 'topKeyUp', 'topMouseDown']
    },
    compositionUpdate: {
      phasedRegistrationNames: {
        bubbled: 'onCompositionUpdate',
        captured: 'onCompositionUpdateCapture'
      },
      dependencies: ['topBlur', 'topCompositionUpdate', 'topKeyDown', 'topKeyPress', 'topKeyUp', 'topMouseDown']
    }
  };
  var hasSpaceKeypress = false;
  function isKeypressCommand(nativeEvent) {
    return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) && !(nativeEvent.ctrlKey && nativeEvent.altKey);
  }
  function getCompositionEventType(topLevelType) {
    switch (topLevelType) {
      case 'topCompositionStart':
        return eventTypes.compositionStart;
      case 'topCompositionEnd':
        return eventTypes.compositionEnd;
      case 'topCompositionUpdate':
        return eventTypes.compositionUpdate;
    }
  }
  function isFallbackCompositionStart(topLevelType, nativeEvent) {
    return topLevelType === 'topKeyDown' && nativeEvent.keyCode === START_KEYCODE;
  }
  function isFallbackCompositionEnd(topLevelType, nativeEvent) {
    switch (topLevelType) {
      case 'topKeyUp':
        return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
      case 'topKeyDown':
        return nativeEvent.keyCode !== START_KEYCODE;
      case 'topKeyPress':
      case 'topMouseDown':
      case 'topBlur':
        return true;
      default:
        return false;
    }
  }
  function getDataFromCustomEvent(nativeEvent) {
    var detail = nativeEvent.detail;
    if (typeof detail === 'object' && 'data' in detail) {
      return detail.data;
    }
    return null;
  }
  var currentComposition = null;
  function extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var eventType;
    var fallbackData;
    if (canUseCompositionEvent) {
      eventType = getCompositionEventType(topLevelType);
    } else if (!currentComposition) {
      if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
        eventType = eventTypes.compositionStart;
      }
    } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
      eventType = eventTypes.compositionEnd;
    }
    if (!eventType) {
      return null;
    }
    if (useFallbackCompositionData) {
      if (!currentComposition && eventType === eventTypes.compositionStart) {
        currentComposition = FallbackCompositionState.getPooled(nativeEventTarget);
      } else if (eventType === eventTypes.compositionEnd) {
        if (currentComposition) {
          fallbackData = currentComposition.getData();
        }
      }
    }
    var event = SyntheticCompositionEvent.getPooled(eventType, targetInst, nativeEvent, nativeEventTarget);
    if (fallbackData) {
      event.data = fallbackData;
    } else {
      var customData = getDataFromCustomEvent(nativeEvent);
      if (customData !== null) {
        event.data = customData;
      }
    }
    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  }
  function getNativeBeforeInputChars(topLevelType, nativeEvent) {
    switch (topLevelType) {
      case 'topCompositionEnd':
        return getDataFromCustomEvent(nativeEvent);
      case 'topKeyPress':
        var which = nativeEvent.which;
        if (which !== SPACEBAR_CODE) {
          return null;
        }
        hasSpaceKeypress = true;
        return SPACEBAR_CHAR;
      case 'topTextInput':
        var chars = nativeEvent.data;
        if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
          return null;
        }
        return chars;
      default:
        return null;
    }
  }
  function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
    if (currentComposition) {
      if (topLevelType === 'topCompositionEnd' || !canUseCompositionEvent && isFallbackCompositionEnd(topLevelType, nativeEvent)) {
        var chars = currentComposition.getData();
        FallbackCompositionState.release(currentComposition);
        currentComposition = null;
        return chars;
      }
      return null;
    }
    switch (topLevelType) {
      case 'topPaste':
        return null;
      case 'topKeyPress':
        if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
          return String.fromCharCode(nativeEvent.which);
        }
        return null;
      case 'topCompositionEnd':
        return useFallbackCompositionData ? null : nativeEvent.data;
      default:
        return null;
    }
  }
  function extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget) {
    var chars;
    if (canUseTextInputEvent) {
      chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
    } else {
      chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
    }
    if (!chars) {
      return null;
    }
    var event = SyntheticInputEvent.getPooled(eventTypes.beforeInput, targetInst, nativeEvent, nativeEventTarget);
    event.data = chars;
    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  }
  var BeforeInputEventPlugin = {
    eventTypes: eventTypes,
    extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
      return [extractCompositionEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget), extractBeforeInputEvent(topLevelType, targetInst, nativeEvent, nativeEventTarget)];
    }
  };
  module.exports = BeforeInputEventPlugin;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ChangeEventPlugin.js', ['npm:react-dom@15.4.2/lib/EventPluginHub.js', 'npm:react-dom@15.4.2/lib/EventPropagators.js', 'npm:fbjs@0.8.9/lib/ExecutionEnvironment.js', 'npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js', 'npm:react-dom@15.4.2/lib/ReactUpdates.js', 'npm:react-dom@15.4.2/lib/SyntheticEvent.js', 'npm:react-dom@15.4.2/lib/getEventTarget.js', 'npm:react-dom@15.4.2/lib/isEventSupported.js', 'npm:react-dom@15.4.2/lib/isTextInputElement.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var EventPluginHub = $__require('npm:react-dom@15.4.2/lib/EventPluginHub.js');
    var EventPropagators = $__require('npm:react-dom@15.4.2/lib/EventPropagators.js');
    var ExecutionEnvironment = $__require('npm:fbjs@0.8.9/lib/ExecutionEnvironment.js');
    var ReactDOMComponentTree = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js');
    var ReactUpdates = $__require('npm:react-dom@15.4.2/lib/ReactUpdates.js');
    var SyntheticEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticEvent.js');
    var getEventTarget = $__require('npm:react-dom@15.4.2/lib/getEventTarget.js');
    var isEventSupported = $__require('npm:react-dom@15.4.2/lib/isEventSupported.js');
    var isTextInputElement = $__require('npm:react-dom@15.4.2/lib/isTextInputElement.js');
    var eventTypes = { change: {
        phasedRegistrationNames: {
          bubbled: 'onChange',
          captured: 'onChangeCapture'
        },
        dependencies: ['topBlur', 'topChange', 'topClick', 'topFocus', 'topInput', 'topKeyDown', 'topKeyUp', 'topSelectionChange']
      } };
    var activeElement = null;
    var activeElementInst = null;
    var activeElementValue = null;
    var activeElementValueProp = null;
    function shouldUseChangeEvent(elem) {
      var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
      return nodeName === 'select' || nodeName === 'input' && elem.type === 'file';
    }
    var doesChangeEventBubble = false;
    if (ExecutionEnvironment.canUseDOM) {
      doesChangeEventBubble = isEventSupported('change') && (!document.documentMode || document.documentMode > 8);
    }
    function manualDispatchChangeEvent(nativeEvent) {
      var event = SyntheticEvent.getPooled(eventTypes.change, activeElementInst, nativeEvent, getEventTarget(nativeEvent));
      EventPropagators.accumulateTwoPhaseDispatches(event);
      ReactUpdates.batchedUpdates(runEventInBatch, event);
    }
    function runEventInBatch(event) {
      EventPluginHub.enqueueEvents(event);
      EventPluginHub.processEventQueue(false);
    }
    function startWatchingForChangeEventIE8(target, targetInst) {
      activeElement = target;
      activeElementInst = targetInst;
      activeElement.attachEvent('onchange', manualDispatchChangeEvent);
    }
    function stopWatchingForChangeEventIE8() {
      if (!activeElement) {
        return;
      }
      activeElement.detachEvent('onchange', manualDispatchChangeEvent);
      activeElement = null;
      activeElementInst = null;
    }
    function getTargetInstForChangeEvent(topLevelType, targetInst) {
      if (topLevelType === 'topChange') {
        return targetInst;
      }
    }
    function handleEventsForChangeEventIE8(topLevelType, target, targetInst) {
      if (topLevelType === 'topFocus') {
        stopWatchingForChangeEventIE8();
        startWatchingForChangeEventIE8(target, targetInst);
      } else if (topLevelType === 'topBlur') {
        stopWatchingForChangeEventIE8();
      }
    }
    var isInputEventSupported = false;
    if (ExecutionEnvironment.canUseDOM) {
      isInputEventSupported = isEventSupported('input') && (!document.documentMode || document.documentMode > 11);
    }
    var newValueProp = {
      get: function () {
        return activeElementValueProp.get.call(this);
      },
      set: function (val) {
        activeElementValue = '' + val;
        activeElementValueProp.set.call(this, val);
      }
    };
    function startWatchingForValueChange(target, targetInst) {
      activeElement = target;
      activeElementInst = targetInst;
      activeElementValue = target.value;
      activeElementValueProp = Object.getOwnPropertyDescriptor(target.constructor.prototype, 'value');
      Object.defineProperty(activeElement, 'value', newValueProp);
      if (activeElement.attachEvent) {
        activeElement.attachEvent('onpropertychange', handlePropertyChange);
      } else {
        activeElement.addEventListener('propertychange', handlePropertyChange, false);
      }
    }
    function stopWatchingForValueChange() {
      if (!activeElement) {
        return;
      }
      delete activeElement.value;
      if (activeElement.detachEvent) {
        activeElement.detachEvent('onpropertychange', handlePropertyChange);
      } else {
        activeElement.removeEventListener('propertychange', handlePropertyChange, false);
      }
      activeElement = null;
      activeElementInst = null;
      activeElementValue = null;
      activeElementValueProp = null;
    }
    function handlePropertyChange(nativeEvent) {
      if (nativeEvent.propertyName !== 'value') {
        return;
      }
      var value = nativeEvent.srcElement.value;
      if (value === activeElementValue) {
        return;
      }
      activeElementValue = value;
      manualDispatchChangeEvent(nativeEvent);
    }
    function getTargetInstForInputEvent(topLevelType, targetInst) {
      if (topLevelType === 'topInput') {
        return targetInst;
      }
    }
    function handleEventsForInputEventIE(topLevelType, target, targetInst) {
      if (topLevelType === 'topFocus') {
        stopWatchingForValueChange();
        startWatchingForValueChange(target, targetInst);
      } else if (topLevelType === 'topBlur') {
        stopWatchingForValueChange();
      }
    }
    function getTargetInstForInputEventIE(topLevelType, targetInst) {
      if (topLevelType === 'topSelectionChange' || topLevelType === 'topKeyUp' || topLevelType === 'topKeyDown') {
        if (activeElement && activeElement.value !== activeElementValue) {
          activeElementValue = activeElement.value;
          return activeElementInst;
        }
      }
    }
    function shouldUseClickEvent(elem) {
      return elem.nodeName && elem.nodeName.toLowerCase() === 'input' && (elem.type === 'checkbox' || elem.type === 'radio');
    }
    function getTargetInstForClickEvent(topLevelType, targetInst) {
      if (topLevelType === 'topClick') {
        return targetInst;
      }
    }
    var ChangeEventPlugin = {
      eventTypes: eventTypes,
      extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
        var targetNode = targetInst ? ReactDOMComponentTree.getNodeFromInstance(targetInst) : window;
        var getTargetInstFunc, handleEventFunc;
        if (shouldUseChangeEvent(targetNode)) {
          if (doesChangeEventBubble) {
            getTargetInstFunc = getTargetInstForChangeEvent;
          } else {
            handleEventFunc = handleEventsForChangeEventIE8;
          }
        } else if (isTextInputElement(targetNode)) {
          if (isInputEventSupported) {
            getTargetInstFunc = getTargetInstForInputEvent;
          } else {
            getTargetInstFunc = getTargetInstForInputEventIE;
            handleEventFunc = handleEventsForInputEventIE;
          }
        } else if (shouldUseClickEvent(targetNode)) {
          getTargetInstFunc = getTargetInstForClickEvent;
        }
        if (getTargetInstFunc) {
          var inst = getTargetInstFunc(topLevelType, targetInst);
          if (inst) {
            var event = SyntheticEvent.getPooled(eventTypes.change, inst, nativeEvent, nativeEventTarget);
            event.type = 'change';
            EventPropagators.accumulateTwoPhaseDispatches(event);
            return event;
          }
        }
        if (handleEventFunc) {
          handleEventFunc(topLevelType, targetNode, targetInst);
        }
      }
    };
    module.exports = ChangeEventPlugin;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/DefaultEventPluginOrder.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  /**
   * Module that is injectable into `EventPluginHub`, that specifies a
   * deterministic ordering of `EventPlugin`s. A convenient way to reason about
   * plugins, without having to package every one of them. This is better than
   * having plugins be ordered in the same order that they are injected because
   * that ordering would be influenced by the packaging order.
   * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
   * preventing default on events is convenient in `SimpleEventPlugin` handlers.
   */

  var global = this || self,
      GLOBAL = global;
  var DefaultEventPluginOrder = ['ResponderEventPlugin', 'SimpleEventPlugin', 'TapEventPlugin', 'EnterLeaveEventPlugin', 'ChangeEventPlugin', 'SelectEventPlugin', 'BeforeInputEventPlugin'];

  module.exports = DefaultEventPluginOrder;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/EnterLeaveEventPlugin.js', ['npm:react-dom@15.4.2/lib/EventPropagators.js', 'npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js', 'npm:react-dom@15.4.2/lib/SyntheticMouseEvent.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var EventPropagators = $__require('npm:react-dom@15.4.2/lib/EventPropagators.js');
  var ReactDOMComponentTree = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js');
  var SyntheticMouseEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticMouseEvent.js');
  var eventTypes = {
    mouseEnter: {
      registrationName: 'onMouseEnter',
      dependencies: ['topMouseOut', 'topMouseOver']
    },
    mouseLeave: {
      registrationName: 'onMouseLeave',
      dependencies: ['topMouseOut', 'topMouseOver']
    }
  };
  var EnterLeaveEventPlugin = {
    eventTypes: eventTypes,
    extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
      if (topLevelType === 'topMouseOver' && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
        return null;
      }
      if (topLevelType !== 'topMouseOut' && topLevelType !== 'topMouseOver') {
        return null;
      }
      var win;
      if (nativeEventTarget.window === nativeEventTarget) {
        win = nativeEventTarget;
      } else {
        var doc = nativeEventTarget.ownerDocument;
        if (doc) {
          win = doc.defaultView || doc.parentWindow;
        } else {
          win = window;
        }
      }
      var from;
      var to;
      if (topLevelType === 'topMouseOut') {
        from = targetInst;
        var related = nativeEvent.relatedTarget || nativeEvent.toElement;
        to = related ? ReactDOMComponentTree.getClosestInstanceFromNode(related) : null;
      } else {
        from = null;
        to = targetInst;
      }
      if (from === to) {
        return null;
      }
      var fromNode = from == null ? win : ReactDOMComponentTree.getNodeFromInstance(from);
      var toNode = to == null ? win : ReactDOMComponentTree.getNodeFromInstance(to);
      var leave = SyntheticMouseEvent.getPooled(eventTypes.mouseLeave, from, nativeEvent, nativeEventTarget);
      leave.type = 'mouseleave';
      leave.target = fromNode;
      leave.relatedTarget = toNode;
      var enter = SyntheticMouseEvent.getPooled(eventTypes.mouseEnter, to, nativeEvent, nativeEventTarget);
      enter.type = 'mouseenter';
      enter.target = toNode;
      enter.relatedTarget = fromNode;
      EventPropagators.accumulateEnterLeaveDispatches(leave, enter, from, to);
      return [leave, enter];
    }
  };
  module.exports = EnterLeaveEventPlugin;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/HTMLDOMPropertyConfig.js', ['npm:react-dom@15.4.2/lib/DOMProperty.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var DOMProperty = $__require('npm:react-dom@15.4.2/lib/DOMProperty.js');
  var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
  var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
  var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
  var HAS_POSITIVE_NUMERIC_VALUE = DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
  var HAS_OVERLOADED_BOOLEAN_VALUE = DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
  var HTMLDOMPropertyConfig = {
    isCustomAttribute: RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + DOMProperty.ATTRIBUTE_NAME_CHAR + ']*$')),
    Properties: {
      accept: 0,
      acceptCharset: 0,
      accessKey: 0,
      action: 0,
      allowFullScreen: HAS_BOOLEAN_VALUE,
      allowTransparency: 0,
      alt: 0,
      as: 0,
      async: HAS_BOOLEAN_VALUE,
      autoComplete: 0,
      autoPlay: HAS_BOOLEAN_VALUE,
      capture: HAS_BOOLEAN_VALUE,
      cellPadding: 0,
      cellSpacing: 0,
      charSet: 0,
      challenge: 0,
      checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      cite: 0,
      classID: 0,
      className: 0,
      cols: HAS_POSITIVE_NUMERIC_VALUE,
      colSpan: 0,
      content: 0,
      contentEditable: 0,
      contextMenu: 0,
      controls: HAS_BOOLEAN_VALUE,
      coords: 0,
      crossOrigin: 0,
      data: 0,
      dateTime: 0,
      'default': HAS_BOOLEAN_VALUE,
      defer: HAS_BOOLEAN_VALUE,
      dir: 0,
      disabled: HAS_BOOLEAN_VALUE,
      download: HAS_OVERLOADED_BOOLEAN_VALUE,
      draggable: 0,
      encType: 0,
      form: 0,
      formAction: 0,
      formEncType: 0,
      formMethod: 0,
      formNoValidate: HAS_BOOLEAN_VALUE,
      formTarget: 0,
      frameBorder: 0,
      headers: 0,
      height: 0,
      hidden: HAS_BOOLEAN_VALUE,
      high: 0,
      href: 0,
      hrefLang: 0,
      htmlFor: 0,
      httpEquiv: 0,
      icon: 0,
      id: 0,
      inputMode: 0,
      integrity: 0,
      is: 0,
      keyParams: 0,
      keyType: 0,
      kind: 0,
      label: 0,
      lang: 0,
      list: 0,
      loop: HAS_BOOLEAN_VALUE,
      low: 0,
      manifest: 0,
      marginHeight: 0,
      marginWidth: 0,
      max: 0,
      maxLength: 0,
      media: 0,
      mediaGroup: 0,
      method: 0,
      min: 0,
      minLength: 0,
      multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      name: 0,
      nonce: 0,
      noValidate: HAS_BOOLEAN_VALUE,
      open: HAS_BOOLEAN_VALUE,
      optimum: 0,
      pattern: 0,
      placeholder: 0,
      playsInline: HAS_BOOLEAN_VALUE,
      poster: 0,
      preload: 0,
      profile: 0,
      radioGroup: 0,
      readOnly: HAS_BOOLEAN_VALUE,
      referrerPolicy: 0,
      rel: 0,
      required: HAS_BOOLEAN_VALUE,
      reversed: HAS_BOOLEAN_VALUE,
      role: 0,
      rows: HAS_POSITIVE_NUMERIC_VALUE,
      rowSpan: HAS_NUMERIC_VALUE,
      sandbox: 0,
      scope: 0,
      scoped: HAS_BOOLEAN_VALUE,
      scrolling: 0,
      seamless: HAS_BOOLEAN_VALUE,
      selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
      shape: 0,
      size: HAS_POSITIVE_NUMERIC_VALUE,
      sizes: 0,
      span: HAS_POSITIVE_NUMERIC_VALUE,
      spellCheck: 0,
      src: 0,
      srcDoc: 0,
      srcLang: 0,
      srcSet: 0,
      start: HAS_NUMERIC_VALUE,
      step: 0,
      style: 0,
      summary: 0,
      tabIndex: 0,
      target: 0,
      title: 0,
      type: 0,
      useMap: 0,
      value: 0,
      width: 0,
      wmode: 0,
      wrap: 0,
      about: 0,
      datatype: 0,
      inlist: 0,
      prefix: 0,
      property: 0,
      resource: 0,
      'typeof': 0,
      vocab: 0,
      autoCapitalize: 0,
      autoCorrect: 0,
      autoSave: 0,
      color: 0,
      itemProp: 0,
      itemScope: HAS_BOOLEAN_VALUE,
      itemType: 0,
      itemID: 0,
      itemRef: 0,
      results: 0,
      security: 0,
      unselectable: 0
    },
    DOMAttributeNames: {
      acceptCharset: 'accept-charset',
      className: 'class',
      htmlFor: 'for',
      httpEquiv: 'http-equiv'
    },
    DOMPropertyNames: {}
  };
  module.exports = HTMLDOMPropertyConfig;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactDOMIDOperations.js', ['npm:react-dom@15.4.2/lib/DOMChildrenOperations.js', 'npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var DOMChildrenOperations = $__require('npm:react-dom@15.4.2/lib/DOMChildrenOperations.js');
    var ReactDOMComponentTree = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js');
    var ReactDOMIDOperations = { dangerouslyProcessChildrenUpdates: function (parentInst, updates) {
        var node = ReactDOMComponentTree.getNodeFromInstance(parentInst);
        DOMChildrenOperations.processUpdates(node, updates);
      } };
    module.exports = ReactDOMIDOperations;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactComponentBrowserEnvironment.js', ['npm:react-dom@15.4.2/lib/DOMChildrenOperations.js', 'npm:react-dom@15.4.2/lib/ReactDOMIDOperations.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var DOMChildrenOperations = $__require('npm:react-dom@15.4.2/lib/DOMChildrenOperations.js');
    var ReactDOMIDOperations = $__require('npm:react-dom@15.4.2/lib/ReactDOMIDOperations.js');
    var ReactComponentBrowserEnvironment = {
      processChildrenUpdates: ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,
      replaceNodeWithMarkup: DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup
    };
    module.exports = ReactComponentBrowserEnvironment;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/AutoFocusUtils.js', ['npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js', 'npm:fbjs@0.8.9/lib/focusNode.js'], true, function ($__require, exports, module) {
    /* */
    'use strict';

    var global = this || self,
        GLOBAL = global;
    var ReactDOMComponentTree = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js');
    var focusNode = $__require('npm:fbjs@0.8.9/lib/focusNode.js');
    var AutoFocusUtils = { focusDOMComponent: function () {
            focusNode(ReactDOMComponentTree.getNodeFromInstance(this));
        } };
    module.exports = AutoFocusUtils;
});
System.registerDynamic("npm:fbjs@0.8.9/lib/camelize.js", [], true, function ($__require, exports, module) {
  /* */
  "use strict";

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @typechecks
   */

  var global = this || self,
      GLOBAL = global;
  var _hyphenPattern = /-(.)/g;

  /**
   * Camelcases a hyphenated string, for example:
   *
   *   > camelize('background-color')
   *   < "backgroundColor"
   *
   * @param {string} string
   * @return {string}
   */
  function camelize(string) {
    return string.replace(_hyphenPattern, function (_, character) {
      return character.toUpperCase();
    });
  }

  module.exports = camelize;
});
System.registerDynamic('npm:fbjs@0.8.9/lib/camelizeStyleName.js', ['npm:fbjs@0.8.9/lib/camelize.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var camelize = $__require('npm:fbjs@0.8.9/lib/camelize.js');
  var msPattern = /^-ms-/;
  function camelizeStyleName(string) {
    return camelize(string.replace(msPattern, 'ms-'));
  }
  module.exports = camelizeStyleName;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/CSSProperty.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  /**
   * CSS properties which accept numbers but are not in units of "px".
   */

  var global = this || self,
      GLOBAL = global;
  var isUnitlessNumber = {
    animationIterationCount: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridRow: true,
    gridColumn: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,

    // SVG-related properties
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  };

  /**
   * @param {string} prefix vendor-specific prefix, eg: Webkit
   * @param {string} key style name, eg: transitionDuration
   * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
   * WebkitTransitionDuration
   */
  function prefixKey(prefix, key) {
    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
  }

  /**
   * Support style names that may come passed in prefixed by adding permutations
   * of vendor prefixes.
   */
  var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

  // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
  // infinite loop, because it iterates over the newly added props too.
  Object.keys(isUnitlessNumber).forEach(function (prop) {
    prefixes.forEach(function (prefix) {
      isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
    });
  });

  /**
   * Most style properties can be unset by doing .style[prop] = '' but IE8
   * doesn't like doing that with shorthand properties so for the properties that
   * IE8 breaks on, which are listed here, we instead unset each of the
   * individual properties. See http://bugs.jquery.com/ticket/12385.
   * The 4-value 'clock' properties like margin, padding, border-width seem to
   * behave without any problems. Curiously, list-style works too without any
   * special prodding.
   */
  var shorthandPropertyExpansions = {
    background: {
      backgroundAttachment: true,
      backgroundColor: true,
      backgroundImage: true,
      backgroundPositionX: true,
      backgroundPositionY: true,
      backgroundRepeat: true
    },
    backgroundPosition: {
      backgroundPositionX: true,
      backgroundPositionY: true
    },
    border: {
      borderWidth: true,
      borderStyle: true,
      borderColor: true
    },
    borderBottom: {
      borderBottomWidth: true,
      borderBottomStyle: true,
      borderBottomColor: true
    },
    borderLeft: {
      borderLeftWidth: true,
      borderLeftStyle: true,
      borderLeftColor: true
    },
    borderRight: {
      borderRightWidth: true,
      borderRightStyle: true,
      borderRightColor: true
    },
    borderTop: {
      borderTopWidth: true,
      borderTopStyle: true,
      borderTopColor: true
    },
    font: {
      fontStyle: true,
      fontVariant: true,
      fontWeight: true,
      fontSize: true,
      lineHeight: true,
      fontFamily: true
    },
    outline: {
      outlineWidth: true,
      outlineStyle: true,
      outlineColor: true
    }
  };

  var CSSProperty = {
    isUnitlessNumber: isUnitlessNumber,
    shorthandPropertyExpansions: shorthandPropertyExpansions
  };

  module.exports = CSSProperty;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/dangerousStyleValue.js', ['npm:react-dom@15.4.2/lib/CSSProperty.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var CSSProperty = $__require('npm:react-dom@15.4.2/lib/CSSProperty.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var isUnitlessNumber = CSSProperty.isUnitlessNumber;
    var styleWarnings = {};
    function dangerousStyleValue(name, value, component) {
      var isEmpty = value == null || typeof value === 'boolean' || value === '';
      if (isEmpty) {
        return '';
      }
      var isNonNumeric = isNaN(value);
      if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
        return '' + value;
      }
      if (typeof value === 'string') {
        if ('production' !== 'production') {
          if (component && value !== '0') {
            var owner = component._currentElement._owner;
            var ownerName = owner ? owner.getName() : null;
            if (ownerName && !styleWarnings[ownerName]) {
              styleWarnings[ownerName] = {};
            }
            var warned = false;
            if (ownerName) {
              var warnings = styleWarnings[ownerName];
              warned = warnings[name];
              if (!warned) {
                warnings[name] = true;
              }
            }
            if (!warned) {
              'production' !== 'production' ? warning(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : void 0;
            }
          }
        }
        value = value.trim();
      }
      return value + 'px';
    }
    module.exports = dangerousStyleValue;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:fbjs@0.8.9/lib/hyphenate.js', [], true, function ($__require, exports, module) {
  /* */
  'use strict';

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @typechecks
   */

  var global = this || self,
      GLOBAL = global;
  var _uppercasePattern = /([A-Z])/g;

  /**
   * Hyphenates a camelcased string, for example:
   *
   *   > hyphenate('backgroundColor')
   *   < "background-color"
   *
   * For CSS style names, use `hyphenateStyleName` instead which works properly
   * with all vendor prefixes, including `ms`.
   *
   * @param {string} string
   * @return {string}
   */
  function hyphenate(string) {
    return string.replace(_uppercasePattern, '-$1').toLowerCase();
  }

  module.exports = hyphenate;
});
System.registerDynamic('npm:fbjs@0.8.9/lib/hyphenateStyleName.js', ['npm:fbjs@0.8.9/lib/hyphenate.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var hyphenate = $__require('npm:fbjs@0.8.9/lib/hyphenate.js');
  var msPattern = /^ms-/;
  function hyphenateStyleName(string) {
    return hyphenate(string).replace(msPattern, '-ms-');
  }
  module.exports = hyphenateStyleName;
});
System.registerDynamic('npm:fbjs@0.8.9/lib/memoizeStringOnly.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   * @typechecks static-only
   */

  'use strict';

  /**
   * Memoizes the return value of a function that accepts one string argument.
   */

  var global = this || self,
      GLOBAL = global;
  function memoizeStringOnly(callback) {
    var cache = {};
    return function (string) {
      if (!cache.hasOwnProperty(string)) {
        cache[string] = callback.call(this, string);
      }
      return cache[string];
    };
  }

  module.exports = memoizeStringOnly;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/CSSPropertyOperations.js', ['npm:react-dom@15.4.2/lib/CSSProperty.js', 'npm:fbjs@0.8.9/lib/ExecutionEnvironment.js', 'npm:react-dom@15.4.2/lib/ReactInstrumentation.js', 'npm:fbjs@0.8.9/lib/camelizeStyleName.js', 'npm:react-dom@15.4.2/lib/dangerousStyleValue.js', 'npm:fbjs@0.8.9/lib/hyphenateStyleName.js', 'npm:fbjs@0.8.9/lib/memoizeStringOnly.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var CSSProperty = $__require('npm:react-dom@15.4.2/lib/CSSProperty.js');
    var ExecutionEnvironment = $__require('npm:fbjs@0.8.9/lib/ExecutionEnvironment.js');
    var ReactInstrumentation = $__require('npm:react-dom@15.4.2/lib/ReactInstrumentation.js');
    var camelizeStyleName = $__require('npm:fbjs@0.8.9/lib/camelizeStyleName.js');
    var dangerousStyleValue = $__require('npm:react-dom@15.4.2/lib/dangerousStyleValue.js');
    var hyphenateStyleName = $__require('npm:fbjs@0.8.9/lib/hyphenateStyleName.js');
    var memoizeStringOnly = $__require('npm:fbjs@0.8.9/lib/memoizeStringOnly.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var processStyleName = memoizeStringOnly(function (styleName) {
      return hyphenateStyleName(styleName);
    });
    var hasShorthandPropertyBug = false;
    var styleFloatAccessor = 'cssFloat';
    if (ExecutionEnvironment.canUseDOM) {
      var tempStyle = document.createElement('div').style;
      try {
        tempStyle.font = '';
      } catch (e) {
        hasShorthandPropertyBug = true;
      }
      if (document.documentElement.style.cssFloat === undefined) {
        styleFloatAccessor = 'styleFloat';
      }
    }
    if ('production' !== 'production') {
      var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
      var badStyleValueWithSemicolonPattern = /;\s*$/;
      var warnedStyleNames = {};
      var warnedStyleValues = {};
      var warnedForNaNValue = false;
      var warnHyphenatedStyleName = function (name, owner) {
        if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
          return;
        }
        warnedStyleNames[name] = true;
        'production' !== 'production' ? warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName(name), checkRenderMessage(owner)) : void 0;
      };
      var warnBadVendoredStyleName = function (name, owner) {
        if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
          return;
        }
        warnedStyleNames[name] = true;
        'production' !== 'production' ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : void 0;
      };
      var warnStyleValueWithSemicolon = function (name, value, owner) {
        if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
          return;
        }
        warnedStyleValues[value] = true;
        'production' !== 'production' ? warning(false, 'Style property values shouldn\'t contain a semicolon.%s ' + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) : void 0;
      };
      var warnStyleValueIsNaN = function (name, value, owner) {
        if (warnedForNaNValue) {
          return;
        }
        warnedForNaNValue = true;
        'production' !== 'production' ? warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) : void 0;
      };
      var checkRenderMessage = function (owner) {
        if (owner) {
          var name = owner.getName();
          if (name) {
            return ' Check the render method of `' + name + '`.';
          }
        }
        return '';
      };
      var warnValidStyle = function (name, value, component) {
        var owner;
        if (component) {
          owner = component._currentElement._owner;
        }
        if (name.indexOf('-') > -1) {
          warnHyphenatedStyleName(name, owner);
        } else if (badVendoredStyleNamePattern.test(name)) {
          warnBadVendoredStyleName(name, owner);
        } else if (badStyleValueWithSemicolonPattern.test(value)) {
          warnStyleValueWithSemicolon(name, value, owner);
        }
        if (typeof value === 'number' && isNaN(value)) {
          warnStyleValueIsNaN(name, value, owner);
        }
      };
    }
    var CSSPropertyOperations = {
      createMarkupForStyles: function (styles, component) {
        var serialized = '';
        for (var styleName in styles) {
          if (!styles.hasOwnProperty(styleName)) {
            continue;
          }
          var styleValue = styles[styleName];
          if ('production' !== 'production') {
            warnValidStyle(styleName, styleValue, component);
          }
          if (styleValue != null) {
            serialized += processStyleName(styleName) + ':';
            serialized += dangerousStyleValue(styleName, styleValue, component) + ';';
          }
        }
        return serialized || null;
      },
      setValueForStyles: function (node, styles, component) {
        if ('production' !== 'production') {
          ReactInstrumentation.debugTool.onHostOperation({
            instanceID: component._debugID,
            type: 'update styles',
            payload: styles
          });
        }
        var style = node.style;
        for (var styleName in styles) {
          if (!styles.hasOwnProperty(styleName)) {
            continue;
          }
          if ('production' !== 'production') {
            warnValidStyle(styleName, styles[styleName], component);
          }
          var styleValue = dangerousStyleValue(styleName, styles[styleName], component);
          if (styleName === 'float' || styleName === 'cssFloat') {
            styleName = styleFloatAccessor;
          }
          if (styleValue) {
            style[styleName] = styleValue;
          } else {
            var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
            if (expansion) {
              for (var individualStyleName in expansion) {
                style[individualStyleName] = '';
              }
            } else {
              style[styleName] = '';
            }
          }
        }
      }
    };
    module.exports = CSSPropertyOperations;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/quoteAttributeValueForBrowser.js', ['npm:react-dom@15.4.2/lib/escapeTextContentForBrowser.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var escapeTextContentForBrowser = $__require('npm:react-dom@15.4.2/lib/escapeTextContentForBrowser.js');
  function quoteAttributeValueForBrowser(value) {
    return '"' + escapeTextContentForBrowser(value) + '"';
  }
  module.exports = quoteAttributeValueForBrowser;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/DOMPropertyOperations.js', ['npm:react-dom@15.4.2/lib/DOMProperty.js', 'npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js', 'npm:react-dom@15.4.2/lib/ReactInstrumentation.js', 'npm:react-dom@15.4.2/lib/quoteAttributeValueForBrowser.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var DOMProperty = $__require('npm:react-dom@15.4.2/lib/DOMProperty.js');
    var ReactDOMComponentTree = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js');
    var ReactInstrumentation = $__require('npm:react-dom@15.4.2/lib/ReactInstrumentation.js');
    var quoteAttributeValueForBrowser = $__require('npm:react-dom@15.4.2/lib/quoteAttributeValueForBrowser.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + DOMProperty.ATTRIBUTE_NAME_START_CHAR + '][' + DOMProperty.ATTRIBUTE_NAME_CHAR + ']*$');
    var illegalAttributeNameCache = {};
    var validatedAttributeNameCache = {};
    function isAttributeNameSafe(attributeName) {
      if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
        return true;
      }
      if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
        return false;
      }
      if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
        validatedAttributeNameCache[attributeName] = true;
        return true;
      }
      illegalAttributeNameCache[attributeName] = true;
      'production' !== 'production' ? warning(false, 'Invalid attribute name: `%s`', attributeName) : void 0;
      return false;
    }
    function shouldIgnoreValue(propertyInfo, value) {
      return value == null || propertyInfo.hasBooleanValue && !value || propertyInfo.hasNumericValue && isNaN(value) || propertyInfo.hasPositiveNumericValue && value < 1 || propertyInfo.hasOverloadedBooleanValue && value === false;
    }
    var DOMPropertyOperations = {
      createMarkupForID: function (id) {
        return DOMProperty.ID_ATTRIBUTE_NAME + '=' + quoteAttributeValueForBrowser(id);
      },
      setAttributeForID: function (node, id) {
        node.setAttribute(DOMProperty.ID_ATTRIBUTE_NAME, id);
      },
      createMarkupForRoot: function () {
        return DOMProperty.ROOT_ATTRIBUTE_NAME + '=""';
      },
      setAttributeForRoot: function (node) {
        node.setAttribute(DOMProperty.ROOT_ATTRIBUTE_NAME, '');
      },
      createMarkupForProperty: function (name, value) {
        var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
        if (propertyInfo) {
          if (shouldIgnoreValue(propertyInfo, value)) {
            return '';
          }
          var attributeName = propertyInfo.attributeName;
          if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
            return attributeName + '=""';
          }
          return attributeName + '=' + quoteAttributeValueForBrowser(value);
        } else if (DOMProperty.isCustomAttribute(name)) {
          if (value == null) {
            return '';
          }
          return name + '=' + quoteAttributeValueForBrowser(value);
        }
        return null;
      },
      createMarkupForCustomAttribute: function (name, value) {
        if (!isAttributeNameSafe(name) || value == null) {
          return '';
        }
        return name + '=' + quoteAttributeValueForBrowser(value);
      },
      setValueForProperty: function (node, name, value) {
        var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
        if (propertyInfo) {
          var mutationMethod = propertyInfo.mutationMethod;
          if (mutationMethod) {
            mutationMethod(node, value);
          } else if (shouldIgnoreValue(propertyInfo, value)) {
            this.deleteValueForProperty(node, name);
            return;
          } else if (propertyInfo.mustUseProperty) {
            node[propertyInfo.propertyName] = value;
          } else {
            var attributeName = propertyInfo.attributeName;
            var namespace = propertyInfo.attributeNamespace;
            if (namespace) {
              node.setAttributeNS(namespace, attributeName, '' + value);
            } else if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
              node.setAttribute(attributeName, '');
            } else {
              node.setAttribute(attributeName, '' + value);
            }
          }
        } else if (DOMProperty.isCustomAttribute(name)) {
          DOMPropertyOperations.setValueForAttribute(node, name, value);
          return;
        }
        if ('production' !== 'production') {
          var payload = {};
          payload[name] = value;
          ReactInstrumentation.debugTool.onHostOperation({
            instanceID: ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
            type: 'update attribute',
            payload: payload
          });
        }
      },
      setValueForAttribute: function (node, name, value) {
        if (!isAttributeNameSafe(name)) {
          return;
        }
        if (value == null) {
          node.removeAttribute(name);
        } else {
          node.setAttribute(name, '' + value);
        }
        if ('production' !== 'production') {
          var payload = {};
          payload[name] = value;
          ReactInstrumentation.debugTool.onHostOperation({
            instanceID: ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
            type: 'update attribute',
            payload: payload
          });
        }
      },
      deleteValueForAttribute: function (node, name) {
        node.removeAttribute(name);
        if ('production' !== 'production') {
          ReactInstrumentation.debugTool.onHostOperation({
            instanceID: ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
            type: 'remove attribute',
            payload: name
          });
        }
      },
      deleteValueForProperty: function (node, name) {
        var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
        if (propertyInfo) {
          var mutationMethod = propertyInfo.mutationMethod;
          if (mutationMethod) {
            mutationMethod(node, undefined);
          } else if (propertyInfo.mustUseProperty) {
            var propName = propertyInfo.propertyName;
            if (propertyInfo.hasBooleanValue) {
              node[propName] = false;
            } else {
              node[propName] = '';
            }
          } else {
            node.removeAttribute(propertyInfo.attributeName);
          }
        } else if (DOMProperty.isCustomAttribute(name)) {
          node.removeAttribute(name);
        }
        if ('production' !== 'production') {
          ReactInstrumentation.debugTool.onHostOperation({
            instanceID: ReactDOMComponentTree.getInstanceFromNode(node)._debugID,
            type: 'remove attribute',
            payload: name
          });
        }
      }
    };
    module.exports = DOMPropertyOperations;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactDOMInput.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:object-assign@4.1.1.js', 'npm:react-dom@15.4.2/lib/DOMPropertyOperations.js', 'npm:react-dom@15.4.2/lib/LinkedValueUtils.js', 'npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js', 'npm:react-dom@15.4.2/lib/ReactUpdates.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js'),
        _assign = $__require('npm:object-assign@4.1.1.js');
    var DOMPropertyOperations = $__require('npm:react-dom@15.4.2/lib/DOMPropertyOperations.js');
    var LinkedValueUtils = $__require('npm:react-dom@15.4.2/lib/LinkedValueUtils.js');
    var ReactDOMComponentTree = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js');
    var ReactUpdates = $__require('npm:react-dom@15.4.2/lib/ReactUpdates.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var didWarnValueLink = false;
    var didWarnCheckedLink = false;
    var didWarnValueDefaultValue = false;
    var didWarnCheckedDefaultChecked = false;
    var didWarnControlledToUncontrolled = false;
    var didWarnUncontrolledToControlled = false;
    function forceUpdateIfMounted() {
      if (this._rootNodeID) {
        ReactDOMInput.updateWrapper(this);
      }
    }
    function isControlled(props) {
      var usesChecked = props.type === 'checkbox' || props.type === 'radio';
      return usesChecked ? props.checked != null : props.value != null;
    }
    var ReactDOMInput = {
      getHostProps: function (inst, props) {
        var value = LinkedValueUtils.getValue(props);
        var checked = LinkedValueUtils.getChecked(props);
        var hostProps = _assign({
          type: undefined,
          step: undefined,
          min: undefined,
          max: undefined
        }, props, {
          defaultChecked: undefined,
          defaultValue: undefined,
          value: value != null ? value : inst._wrapperState.initialValue,
          checked: checked != null ? checked : inst._wrapperState.initialChecked,
          onChange: inst._wrapperState.onChange
        });
        return hostProps;
      },
      mountWrapper: function (inst, props) {
        if ('production' !== 'production') {
          LinkedValueUtils.checkPropTypes('input', props, inst._currentElement._owner);
          var owner = inst._currentElement._owner;
          if (props.valueLink !== undefined && !didWarnValueLink) {
            'production' !== 'production' ? warning(false, '`valueLink` prop on `input` is deprecated; set `value` and `onChange` instead.') : void 0;
            didWarnValueLink = true;
          }
          if (props.checkedLink !== undefined && !didWarnCheckedLink) {
            'production' !== 'production' ? warning(false, '`checkedLink` prop on `input` is deprecated; set `value` and `onChange` instead.') : void 0;
            didWarnCheckedLink = true;
          }
          if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnCheckedDefaultChecked) {
            'production' !== 'production' ? warning(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
            didWarnCheckedDefaultChecked = true;
          }
          if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue) {
            'production' !== 'production' ? warning(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
            didWarnValueDefaultValue = true;
          }
        }
        var defaultValue = props.defaultValue;
        inst._wrapperState = {
          initialChecked: props.checked != null ? props.checked : props.defaultChecked,
          initialValue: props.value != null ? props.value : defaultValue,
          listeners: null,
          onChange: _handleChange.bind(inst)
        };
        if ('production' !== 'production') {
          inst._wrapperState.controlled = isControlled(props);
        }
      },
      updateWrapper: function (inst) {
        var props = inst._currentElement.props;
        if ('production' !== 'production') {
          var controlled = isControlled(props);
          var owner = inst._currentElement._owner;
          if (!inst._wrapperState.controlled && controlled && !didWarnUncontrolledToControlled) {
            'production' !== 'production' ? warning(false, '%s is changing an uncontrolled input of type %s to be controlled. ' + 'Input elements should not switch from uncontrolled to controlled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
            didWarnUncontrolledToControlled = true;
          }
          if (inst._wrapperState.controlled && !controlled && !didWarnControlledToUncontrolled) {
            'production' !== 'production' ? warning(false, '%s is changing a controlled input of type %s to be uncontrolled. ' + 'Input elements should not switch from controlled to uncontrolled (or vice versa). ' + 'Decide between using a controlled or uncontrolled input ' + 'element for the lifetime of the component. More info: https://fb.me/react-controlled-components', owner && owner.getName() || 'A component', props.type) : void 0;
            didWarnControlledToUncontrolled = true;
          }
        }
        var checked = props.checked;
        if (checked != null) {
          DOMPropertyOperations.setValueForProperty(ReactDOMComponentTree.getNodeFromInstance(inst), 'checked', checked || false);
        }
        var node = ReactDOMComponentTree.getNodeFromInstance(inst);
        var value = LinkedValueUtils.getValue(props);
        if (value != null) {
          var newValue = '' + value;
          if (newValue !== node.value) {
            node.value = newValue;
          }
        } else {
          if (props.value == null && props.defaultValue != null) {
            if (node.defaultValue !== '' + props.defaultValue) {
              node.defaultValue = '' + props.defaultValue;
            }
          }
          if (props.checked == null && props.defaultChecked != null) {
            node.defaultChecked = !!props.defaultChecked;
          }
        }
      },
      postMountWrapper: function (inst) {
        var props = inst._currentElement.props;
        var node = ReactDOMComponentTree.getNodeFromInstance(inst);
        switch (props.type) {
          case 'submit':
          case 'reset':
            break;
          case 'color':
          case 'date':
          case 'datetime':
          case 'datetime-local':
          case 'month':
          case 'time':
          case 'week':
            node.value = '';
            node.value = node.defaultValue;
            break;
          default:
            node.value = node.value;
            break;
        }
        var name = node.name;
        if (name !== '') {
          node.name = '';
        }
        node.defaultChecked = !node.defaultChecked;
        node.defaultChecked = !node.defaultChecked;
        if (name !== '') {
          node.name = name;
        }
      }
    };
    function _handleChange(event) {
      var props = this._currentElement.props;
      var returnValue = LinkedValueUtils.executeOnChange(props, event);
      ReactUpdates.asap(forceUpdateIfMounted, this);
      var name = props.name;
      if (props.type === 'radio' && name != null) {
        var rootNode = ReactDOMComponentTree.getNodeFromInstance(this);
        var queryRoot = rootNode;
        while (queryRoot.parentNode) {
          queryRoot = queryRoot.parentNode;
        }
        var group = queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');
        for (var i = 0; i < group.length; i++) {
          var otherNode = group[i];
          if (otherNode === rootNode || otherNode.form !== rootNode.form) {
            continue;
          }
          var otherInstance = ReactDOMComponentTree.getInstanceFromNode(otherNode);
          !otherInstance ? 'production' !== 'production' ? invariant(false, 'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.') : _prodInvariant('90') : void 0;
          ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
        }
      }
      return returnValue;
    }
    module.exports = ReactDOMInput;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactDOMOption.js', ['npm:object-assign@4.1.1.js', 'npm:react@15.4.2/lib/React.js', 'npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js', 'npm:react-dom@15.4.2/lib/ReactDOMSelect.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _assign = $__require('npm:object-assign@4.1.1.js');
    var React = $__require('npm:react@15.4.2/lib/React.js');
    var ReactDOMComponentTree = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js');
    var ReactDOMSelect = $__require('npm:react-dom@15.4.2/lib/ReactDOMSelect.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var didWarnInvalidOptionChildren = false;
    function flattenChildren(children) {
      var content = '';
      React.Children.forEach(children, function (child) {
        if (child == null) {
          return;
        }
        if (typeof child === 'string' || typeof child === 'number') {
          content += child;
        } else if (!didWarnInvalidOptionChildren) {
          didWarnInvalidOptionChildren = true;
          'production' !== 'production' ? warning(false, 'Only strings and numbers are supported as <option> children.') : void 0;
        }
      });
      return content;
    }
    var ReactDOMOption = {
      mountWrapper: function (inst, props, hostParent) {
        if ('production' !== 'production') {
          'production' !== 'production' ? warning(props.selected == null, 'Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.') : void 0;
        }
        var selectValue = null;
        if (hostParent != null) {
          var selectParent = hostParent;
          if (selectParent._tag === 'optgroup') {
            selectParent = selectParent._hostParent;
          }
          if (selectParent != null && selectParent._tag === 'select') {
            selectValue = ReactDOMSelect.getSelectValueContext(selectParent);
          }
        }
        var selected = null;
        if (selectValue != null) {
          var value;
          if (props.value != null) {
            value = props.value + '';
          } else {
            value = flattenChildren(props.children);
          }
          selected = false;
          if (Array.isArray(selectValue)) {
            for (var i = 0; i < selectValue.length; i++) {
              if ('' + selectValue[i] === value) {
                selected = true;
                break;
              }
            }
          } else {
            selected = '' + selectValue === value;
          }
        }
        inst._wrapperState = { selected: selected };
      },
      postMountWrapper: function (inst) {
        var props = inst._currentElement.props;
        if (props.value != null) {
          var node = ReactDOMComponentTree.getNodeFromInstance(inst);
          node.setAttribute('value', props.value);
        }
      },
      getHostProps: function (inst, props) {
        var hostProps = _assign({
          selected: undefined,
          children: undefined
        }, props);
        if (inst._wrapperState.selected != null) {
          hostProps.selected = inst._wrapperState.selected;
        }
        var content = flattenChildren(props.children);
        if (content) {
          hostProps.children = content;
        }
        return hostProps;
      }
    };
    module.exports = ReactDOMOption;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactDOMSelect.js', ['npm:object-assign@4.1.1.js', 'npm:react-dom@15.4.2/lib/LinkedValueUtils.js', 'npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js', 'npm:react-dom@15.4.2/lib/ReactUpdates.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _assign = $__require('npm:object-assign@4.1.1.js');
    var LinkedValueUtils = $__require('npm:react-dom@15.4.2/lib/LinkedValueUtils.js');
    var ReactDOMComponentTree = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js');
    var ReactUpdates = $__require('npm:react-dom@15.4.2/lib/ReactUpdates.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var didWarnValueLink = false;
    var didWarnValueDefaultValue = false;
    function updateOptionsIfPendingUpdateAndMounted() {
      if (this._rootNodeID && this._wrapperState.pendingUpdate) {
        this._wrapperState.pendingUpdate = false;
        var props = this._currentElement.props;
        var value = LinkedValueUtils.getValue(props);
        if (value != null) {
          updateOptions(this, Boolean(props.multiple), value);
        }
      }
    }
    function getDeclarationErrorAddendum(owner) {
      if (owner) {
        var name = owner.getName();
        if (name) {
          return ' Check the render method of `' + name + '`.';
        }
      }
      return '';
    }
    var valuePropNames = ['value', 'defaultValue'];
    function checkSelectPropTypes(inst, props) {
      var owner = inst._currentElement._owner;
      LinkedValueUtils.checkPropTypes('select', props, owner);
      if (props.valueLink !== undefined && !didWarnValueLink) {
        'production' !== 'production' ? warning(false, '`valueLink` prop on `select` is deprecated; set `value` and `onChange` instead.') : void 0;
        didWarnValueLink = true;
      }
      for (var i = 0; i < valuePropNames.length; i++) {
        var propName = valuePropNames[i];
        if (props[propName] == null) {
          continue;
        }
        var isArray = Array.isArray(props[propName]);
        if (props.multiple && !isArray) {
          'production' !== 'production' ? warning(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, getDeclarationErrorAddendum(owner)) : void 0;
        } else if (!props.multiple && isArray) {
          'production' !== 'production' ? warning(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, getDeclarationErrorAddendum(owner)) : void 0;
        }
      }
    }
    function updateOptions(inst, multiple, propValue) {
      var selectedValue, i;
      var options = ReactDOMComponentTree.getNodeFromInstance(inst).options;
      if (multiple) {
        selectedValue = {};
        for (i = 0; i < propValue.length; i++) {
          selectedValue['' + propValue[i]] = true;
        }
        for (i = 0; i < options.length; i++) {
          var selected = selectedValue.hasOwnProperty(options[i].value);
          if (options[i].selected !== selected) {
            options[i].selected = selected;
          }
        }
      } else {
        selectedValue = '' + propValue;
        for (i = 0; i < options.length; i++) {
          if (options[i].value === selectedValue) {
            options[i].selected = true;
            return;
          }
        }
        if (options.length) {
          options[0].selected = true;
        }
      }
    }
    var ReactDOMSelect = {
      getHostProps: function (inst, props) {
        return _assign({}, props, {
          onChange: inst._wrapperState.onChange,
          value: undefined
        });
      },
      mountWrapper: function (inst, props) {
        if ('production' !== 'production') {
          checkSelectPropTypes(inst, props);
        }
        var value = LinkedValueUtils.getValue(props);
        inst._wrapperState = {
          pendingUpdate: false,
          initialValue: value != null ? value : props.defaultValue,
          listeners: null,
          onChange: _handleChange.bind(inst),
          wasMultiple: Boolean(props.multiple)
        };
        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValueDefaultValue) {
          'production' !== 'production' ? warning(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components') : void 0;
          didWarnValueDefaultValue = true;
        }
      },
      getSelectValueContext: function (inst) {
        return inst._wrapperState.initialValue;
      },
      postUpdateWrapper: function (inst) {
        var props = inst._currentElement.props;
        inst._wrapperState.initialValue = undefined;
        var wasMultiple = inst._wrapperState.wasMultiple;
        inst._wrapperState.wasMultiple = Boolean(props.multiple);
        var value = LinkedValueUtils.getValue(props);
        if (value != null) {
          inst._wrapperState.pendingUpdate = false;
          updateOptions(inst, Boolean(props.multiple), value);
        } else if (wasMultiple !== Boolean(props.multiple)) {
          if (props.defaultValue != null) {
            updateOptions(inst, Boolean(props.multiple), props.defaultValue);
          } else {
            updateOptions(inst, Boolean(props.multiple), props.multiple ? [] : '');
          }
        }
      }
    };
    function _handleChange(event) {
      var props = this._currentElement.props;
      var returnValue = LinkedValueUtils.executeOnChange(props, event);
      if (this._rootNodeID) {
        this._wrapperState.pendingUpdate = true;
      }
      ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted, this);
      return returnValue;
    }
    module.exports = ReactDOMSelect;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/LinkedValueUtils.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:react@15.4.2/lib/React.js', 'npm:react-dom@15.4.2/lib/ReactPropTypesSecret.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    var React = $__require('npm:react@15.4.2/lib/React.js');
    var ReactPropTypesSecret = $__require('npm:react-dom@15.4.2/lib/ReactPropTypesSecret.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var hasReadOnlyValue = {
      'button': true,
      'checkbox': true,
      'image': true,
      'hidden': true,
      'radio': true,
      'reset': true,
      'submit': true
    };
    function _assertSingleLink(inputProps) {
      !(inputProps.checkedLink == null || inputProps.valueLink == null) ? 'production' !== 'production' ? invariant(false, 'Cannot provide a checkedLink and a valueLink. If you want to use checkedLink, you probably don\'t want to use valueLink and vice versa.') : _prodInvariant('87') : void 0;
    }
    function _assertValueLink(inputProps) {
      _assertSingleLink(inputProps);
      !(inputProps.value == null && inputProps.onChange == null) ? 'production' !== 'production' ? invariant(false, 'Cannot provide a valueLink and a value or onChange event. If you want to use value or onChange, you probably don\'t want to use valueLink.') : _prodInvariant('88') : void 0;
    }
    function _assertCheckedLink(inputProps) {
      _assertSingleLink(inputProps);
      !(inputProps.checked == null && inputProps.onChange == null) ? 'production' !== 'production' ? invariant(false, 'Cannot provide a checkedLink and a checked property or onChange event. If you want to use checked or onChange, you probably don\'t want to use checkedLink') : _prodInvariant('89') : void 0;
    }
    var propTypes = {
      value: function (props, propName, componentName) {
        if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
          return null;
        }
        return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
      },
      checked: function (props, propName, componentName) {
        if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
          return null;
        }
        return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
      },
      onChange: React.PropTypes.func
    };
    var loggedTypeFailures = {};
    function getDeclarationErrorAddendum(owner) {
      if (owner) {
        var name = owner.getName();
        if (name) {
          return ' Check the render method of `' + name + '`.';
        }
      }
      return '';
    }
    var LinkedValueUtils = {
      checkPropTypes: function (tagName, props, owner) {
        for (var propName in propTypes) {
          if (propTypes.hasOwnProperty(propName)) {
            var error = propTypes[propName](props, propName, tagName, 'prop', null, ReactPropTypesSecret);
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            loggedTypeFailures[error.message] = true;
            var addendum = getDeclarationErrorAddendum(owner);
            'production' !== 'production' ? warning(false, 'Failed form propType: %s%s', error.message, addendum) : void 0;
          }
        }
      },
      getValue: function (inputProps) {
        if (inputProps.valueLink) {
          _assertValueLink(inputProps);
          return inputProps.valueLink.value;
        }
        return inputProps.value;
      },
      getChecked: function (inputProps) {
        if (inputProps.checkedLink) {
          _assertCheckedLink(inputProps);
          return inputProps.checkedLink.value;
        }
        return inputProps.checked;
      },
      executeOnChange: function (inputProps, event) {
        if (inputProps.valueLink) {
          _assertValueLink(inputProps);
          return inputProps.valueLink.requestChange(event.target.value);
        } else if (inputProps.checkedLink) {
          _assertCheckedLink(inputProps);
          return inputProps.checkedLink.requestChange(event.target.checked);
        } else if (inputProps.onChange) {
          return inputProps.onChange.call(undefined, event);
        }
      }
    };
    module.exports = LinkedValueUtils;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactDOMTextarea.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:object-assign@4.1.1.js', 'npm:react-dom@15.4.2/lib/LinkedValueUtils.js', 'npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js', 'npm:react-dom@15.4.2/lib/ReactUpdates.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js'),
        _assign = $__require('npm:object-assign@4.1.1.js');
    var LinkedValueUtils = $__require('npm:react-dom@15.4.2/lib/LinkedValueUtils.js');
    var ReactDOMComponentTree = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js');
    var ReactUpdates = $__require('npm:react-dom@15.4.2/lib/ReactUpdates.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var didWarnValueLink = false;
    var didWarnValDefaultVal = false;
    function forceUpdateIfMounted() {
      if (this._rootNodeID) {
        ReactDOMTextarea.updateWrapper(this);
      }
    }
    var ReactDOMTextarea = {
      getHostProps: function (inst, props) {
        !(props.dangerouslySetInnerHTML == null) ? 'production' !== 'production' ? invariant(false, '`dangerouslySetInnerHTML` does not make sense on <textarea>.') : _prodInvariant('91') : void 0;
        var hostProps = _assign({}, props, {
          value: undefined,
          defaultValue: undefined,
          children: '' + inst._wrapperState.initialValue,
          onChange: inst._wrapperState.onChange
        });
        return hostProps;
      },
      mountWrapper: function (inst, props) {
        if ('production' !== 'production') {
          LinkedValueUtils.checkPropTypes('textarea', props, inst._currentElement._owner);
          if (props.valueLink !== undefined && !didWarnValueLink) {
            'production' !== 'production' ? warning(false, '`valueLink` prop on `textarea` is deprecated; set `value` and `onChange` instead.') : void 0;
            didWarnValueLink = true;
          }
          if (props.value !== undefined && props.defaultValue !== undefined && !didWarnValDefaultVal) {
            'production' !== 'production' ? warning(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components') : void 0;
            didWarnValDefaultVal = true;
          }
        }
        var value = LinkedValueUtils.getValue(props);
        var initialValue = value;
        if (value == null) {
          var defaultValue = props.defaultValue;
          var children = props.children;
          if (children != null) {
            if ('production' !== 'production') {
              'production' !== 'production' ? warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.') : void 0;
            }
            !(defaultValue == null) ? 'production' !== 'production' ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : _prodInvariant('92') : void 0;
            if (Array.isArray(children)) {
              !(children.length <= 1) ? 'production' !== 'production' ? invariant(false, '<textarea> can only have at most one child.') : _prodInvariant('93') : void 0;
              children = children[0];
            }
            defaultValue = '' + children;
          }
          if (defaultValue == null) {
            defaultValue = '';
          }
          initialValue = defaultValue;
        }
        inst._wrapperState = {
          initialValue: '' + initialValue,
          listeners: null,
          onChange: _handleChange.bind(inst)
        };
      },
      updateWrapper: function (inst) {
        var props = inst._currentElement.props;
        var node = ReactDOMComponentTree.getNodeFromInstance(inst);
        var value = LinkedValueUtils.getValue(props);
        if (value != null) {
          var newValue = '' + value;
          if (newValue !== node.value) {
            node.value = newValue;
          }
          if (props.defaultValue == null) {
            node.defaultValue = newValue;
          }
        }
        if (props.defaultValue != null) {
          node.defaultValue = props.defaultValue;
        }
      },
      postMountWrapper: function (inst) {
        var node = ReactDOMComponentTree.getNodeFromInstance(inst);
        var textContent = node.textContent;
        if (textContent === inst._wrapperState.initialValue) {
          node.value = textContent;
        }
      }
    };
    function _handleChange(event) {
      var props = this._currentElement.props;
      var returnValue = LinkedValueUtils.executeOnChange(props, event);
      ReactUpdates.asap(forceUpdateIfMounted, this);
      return returnValue;
    }
    module.exports = ReactDOMTextarea;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactChildReconciler.js', ['npm:react-dom@15.4.2/lib/ReactReconciler.js', 'npm:react-dom@15.4.2/lib/instantiateReactComponent.js', 'npm:react-dom@15.4.2/lib/KeyEscapeUtils.js', 'npm:react-dom@15.4.2/lib/shouldUpdateReactComponent.js', 'npm:react-dom@15.4.2/lib/traverseAllChildren.js', 'npm:fbjs@0.8.9/lib/warning.js', 'npm:react@15.4.2/lib/ReactComponentTreeHook.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var ReactReconciler = $__require('npm:react-dom@15.4.2/lib/ReactReconciler.js');
    var instantiateReactComponent = $__require('npm:react-dom@15.4.2/lib/instantiateReactComponent.js');
    var KeyEscapeUtils = $__require('npm:react-dom@15.4.2/lib/KeyEscapeUtils.js');
    var shouldUpdateReactComponent = $__require('npm:react-dom@15.4.2/lib/shouldUpdateReactComponent.js');
    var traverseAllChildren = $__require('npm:react-dom@15.4.2/lib/traverseAllChildren.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var ReactComponentTreeHook;
    if (typeof process !== 'undefined' && process.env && 'production' === 'test') {
      ReactComponentTreeHook = $__require('npm:react@15.4.2/lib/ReactComponentTreeHook.js');
    }
    function instantiateChild(childInstances, child, name, selfDebugID) {
      var keyUnique = childInstances[name] === undefined;
      if ('production' !== 'production') {
        if (!ReactComponentTreeHook) {
          ReactComponentTreeHook = $__require('npm:react@15.4.2/lib/ReactComponentTreeHook.js');
        }
        if (!keyUnique) {
          'production' !== 'production' ? warning(false, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.%s', KeyEscapeUtils.unescape(name), ReactComponentTreeHook.getStackAddendumByID(selfDebugID)) : void 0;
        }
      }
      if (child != null && keyUnique) {
        childInstances[name] = instantiateReactComponent(child, true);
      }
    }
    var ReactChildReconciler = {
      instantiateChildren: function (nestedChildNodes, transaction, context, selfDebugID) {
        if (nestedChildNodes == null) {
          return null;
        }
        var childInstances = {};
        if ('production' !== 'production') {
          traverseAllChildren(nestedChildNodes, function (childInsts, child, name) {
            return instantiateChild(childInsts, child, name, selfDebugID);
          }, childInstances);
        } else {
          traverseAllChildren(nestedChildNodes, instantiateChild, childInstances);
        }
        return childInstances;
      },
      updateChildren: function (prevChildren, nextChildren, mountImages, removedNodes, transaction, hostParent, hostContainerInfo, context, selfDebugID) {
        if (!nextChildren && !prevChildren) {
          return;
        }
        var name;
        var prevChild;
        for (name in nextChildren) {
          if (!nextChildren.hasOwnProperty(name)) {
            continue;
          }
          prevChild = prevChildren && prevChildren[name];
          var prevElement = prevChild && prevChild._currentElement;
          var nextElement = nextChildren[name];
          if (prevChild != null && shouldUpdateReactComponent(prevElement, nextElement)) {
            ReactReconciler.receiveComponent(prevChild, nextElement, transaction, context);
            nextChildren[name] = prevChild;
          } else {
            if (prevChild) {
              removedNodes[name] = ReactReconciler.getHostNode(prevChild);
              ReactReconciler.unmountComponent(prevChild, false);
            }
            var nextChildInstance = instantiateReactComponent(nextElement, true);
            nextChildren[name] = nextChildInstance;
            var nextChildMountImage = ReactReconciler.mountComponent(nextChildInstance, transaction, hostParent, hostContainerInfo, context, selfDebugID);
            mountImages.push(nextChildMountImage);
          }
        }
        for (name in prevChildren) {
          if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
            prevChild = prevChildren[name];
            removedNodes[name] = ReactReconciler.getHostNode(prevChild);
            ReactReconciler.unmountComponent(prevChild, false);
          }
        }
      },
      unmountChildren: function (renderedChildren, safely) {
        for (var name in renderedChildren) {
          if (renderedChildren.hasOwnProperty(name)) {
            var renderedChild = renderedChildren[name];
            ReactReconciler.unmountComponent(renderedChild, safely);
          }
        }
      }
    };
    module.exports = ReactChildReconciler;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactElementSymbol.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2014-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */

  'use strict';

  // The Symbol used to tag the ReactElement type. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.

  var global = this || self,
      GLOBAL = global;
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

  module.exports = REACT_ELEMENT_TYPE;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/getIteratorFn.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */

  'use strict';

  /* global Symbol */

  var global = this || self,
      GLOBAL = global;
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  module.exports = getIteratorFn;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/KeyEscapeUtils.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */

  'use strict';

  /**
   * Escape and wrap key so it is safe to use as a reactid
   *
   * @param {string} key to be escaped.
   * @return {string} the escaped key.
   */

  var global = this || self,
      GLOBAL = global;
  function escape(key) {
    var escapeRegex = /[=:]/g;
    var escaperLookup = {
      '=': '=0',
      ':': '=2'
    };
    var escapedString = ('' + key).replace(escapeRegex, function (match) {
      return escaperLookup[match];
    });

    return '$' + escapedString;
  }

  /**
   * Unescape and unwrap key for human-readable display
   *
   * @param {string} key to unescape.
   * @return {string} the unescaped key.
   */
  function unescape(key) {
    var unescapeRegex = /(=0|=2)/g;
    var unescaperLookup = {
      '=0': '=',
      '=2': ':'
    };
    var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

    return ('' + keySubstring).replace(unescapeRegex, function (match) {
      return unescaperLookup[match];
    });
  }

  var KeyEscapeUtils = {
    escape: escape,
    unescape: unescape
  };

  module.exports = KeyEscapeUtils;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/traverseAllChildren.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:react@15.4.2/lib/ReactCurrentOwner.js', 'npm:react-dom@15.4.2/lib/ReactElementSymbol.js', 'npm:react-dom@15.4.2/lib/getIteratorFn.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'npm:react-dom@15.4.2/lib/KeyEscapeUtils.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    var ReactCurrentOwner = $__require('npm:react@15.4.2/lib/ReactCurrentOwner.js');
    var REACT_ELEMENT_TYPE = $__require('npm:react-dom@15.4.2/lib/ReactElementSymbol.js');
    var getIteratorFn = $__require('npm:react-dom@15.4.2/lib/getIteratorFn.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var KeyEscapeUtils = $__require('npm:react-dom@15.4.2/lib/KeyEscapeUtils.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var SEPARATOR = '.';
    var SUBSEPARATOR = ':';
    var didWarnAboutMaps = false;
    function getComponentKey(component, index) {
      if (component && typeof component === 'object' && component.key != null) {
        return KeyEscapeUtils.escape(component.key);
      }
      return index.toString(36);
    }
    function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
      var type = typeof children;
      if (type === 'undefined' || type === 'boolean') {
        children = null;
      }
      if (children === null || type === 'string' || type === 'number' || type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
        callback(traverseContext, children, nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
        return 1;
      }
      var child;
      var nextName;
      var subtreeCount = 0;
      var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          child = children[i];
          nextName = nextNamePrefix + getComponentKey(child, i);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        var iteratorFn = getIteratorFn(children);
        if (iteratorFn) {
          var iterator = iteratorFn.call(children);
          var step;
          if (iteratorFn !== children.entries) {
            var ii = 0;
            while (!(step = iterator.next()).done) {
              child = step.value;
              nextName = nextNamePrefix + getComponentKey(child, ii++);
              subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
            }
          } else {
            if ('production' !== 'production') {
              var mapsAsChildrenAddendum = '';
              if (ReactCurrentOwner.current) {
                var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
                if (mapsAsChildrenOwnerName) {
                  mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
                }
              }
              'production' !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
              didWarnAboutMaps = true;
            }
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                child = entry[1];
                nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
                subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
              }
            }
          }
        } else if (type === 'object') {
          var addendum = '';
          if ('production' !== 'production') {
            addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
            if (children._isReactElement) {
              addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
            }
            if (ReactCurrentOwner.current) {
              var name = ReactCurrentOwner.current.getName();
              if (name) {
                addendum += ' Check the render method of `' + name + '`.';
              }
            }
          }
          var childrenString = String(children);
          !false ? 'production' !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
        }
      }
      return subtreeCount;
    }
    function traverseAllChildren(children, callback, traverseContext) {
      if (children == null) {
        return 0;
      }
      return traverseAllChildrenImpl(children, '', callback, traverseContext);
    }
    module.exports = traverseAllChildren;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/flattenChildren.js', ['npm:react-dom@15.4.2/lib/KeyEscapeUtils.js', 'npm:react-dom@15.4.2/lib/traverseAllChildren.js', 'npm:fbjs@0.8.9/lib/warning.js', 'npm:react@15.4.2/lib/ReactComponentTreeHook.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var KeyEscapeUtils = $__require('npm:react-dom@15.4.2/lib/KeyEscapeUtils.js');
    var traverseAllChildren = $__require('npm:react-dom@15.4.2/lib/traverseAllChildren.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var ReactComponentTreeHook;
    if (typeof process !== 'undefined' && process.env && 'production' === 'test') {
      ReactComponentTreeHook = $__require('npm:react@15.4.2/lib/ReactComponentTreeHook.js');
    }
    function flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID) {
      if (traverseContext && typeof traverseContext === 'object') {
        var result = traverseContext;
        var keyUnique = result[name] === undefined;
        if ('production' !== 'production') {
          if (!ReactComponentTreeHook) {
            ReactComponentTreeHook = $__require('npm:react@15.4.2/lib/ReactComponentTreeHook.js');
          }
          if (!keyUnique) {
            'production' !== 'production' ? warning(false, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.%s', KeyEscapeUtils.unescape(name), ReactComponentTreeHook.getStackAddendumByID(selfDebugID)) : void 0;
          }
        }
        if (keyUnique && child != null) {
          result[name] = child;
        }
      }
    }
    function flattenChildren(children, selfDebugID) {
      if (children == null) {
        return children;
      }
      var result = {};
      if ('production' !== 'production') {
        traverseAllChildren(children, function (traverseContext, child, name) {
          return flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID);
        }, result);
      } else {
        traverseAllChildren(children, flattenSingleChildIntoContext, result);
      }
      return result;
    }
    module.exports = flattenChildren;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactMultiChild.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:react-dom@15.4.2/lib/ReactComponentEnvironment.js', 'npm:react-dom@15.4.2/lib/ReactInstanceMap.js', 'npm:react-dom@15.4.2/lib/ReactInstrumentation.js', 'npm:react@15.4.2/lib/ReactCurrentOwner.js', 'npm:react-dom@15.4.2/lib/ReactReconciler.js', 'npm:react-dom@15.4.2/lib/ReactChildReconciler.js', 'npm:fbjs@0.8.9/lib/emptyFunction.js', 'npm:react-dom@15.4.2/lib/flattenChildren.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    var ReactComponentEnvironment = $__require('npm:react-dom@15.4.2/lib/ReactComponentEnvironment.js');
    var ReactInstanceMap = $__require('npm:react-dom@15.4.2/lib/ReactInstanceMap.js');
    var ReactInstrumentation = $__require('npm:react-dom@15.4.2/lib/ReactInstrumentation.js');
    var ReactCurrentOwner = $__require('npm:react@15.4.2/lib/ReactCurrentOwner.js');
    var ReactReconciler = $__require('npm:react-dom@15.4.2/lib/ReactReconciler.js');
    var ReactChildReconciler = $__require('npm:react-dom@15.4.2/lib/ReactChildReconciler.js');
    var emptyFunction = $__require('npm:fbjs@0.8.9/lib/emptyFunction.js');
    var flattenChildren = $__require('npm:react-dom@15.4.2/lib/flattenChildren.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    function makeInsertMarkup(markup, afterNode, toIndex) {
      return {
        type: 'INSERT_MARKUP',
        content: markup,
        fromIndex: null,
        fromNode: null,
        toIndex: toIndex,
        afterNode: afterNode
      };
    }
    function makeMove(child, afterNode, toIndex) {
      return {
        type: 'MOVE_EXISTING',
        content: null,
        fromIndex: child._mountIndex,
        fromNode: ReactReconciler.getHostNode(child),
        toIndex: toIndex,
        afterNode: afterNode
      };
    }
    function makeRemove(child, node) {
      return {
        type: 'REMOVE_NODE',
        content: null,
        fromIndex: child._mountIndex,
        fromNode: node,
        toIndex: null,
        afterNode: null
      };
    }
    function makeSetMarkup(markup) {
      return {
        type: 'SET_MARKUP',
        content: markup,
        fromIndex: null,
        fromNode: null,
        toIndex: null,
        afterNode: null
      };
    }
    function makeTextContent(textContent) {
      return {
        type: 'TEXT_CONTENT',
        content: textContent,
        fromIndex: null,
        fromNode: null,
        toIndex: null,
        afterNode: null
      };
    }
    function enqueue(queue, update) {
      if (update) {
        queue = queue || [];
        queue.push(update);
      }
      return queue;
    }
    function processQueue(inst, updateQueue) {
      ReactComponentEnvironment.processChildrenUpdates(inst, updateQueue);
    }
    var setChildrenForInstrumentation = emptyFunction;
    if ('production' !== 'production') {
      var getDebugID = function (inst) {
        if (!inst._debugID) {
          var internal;
          if (internal = ReactInstanceMap.get(inst)) {
            inst = internal;
          }
        }
        return inst._debugID;
      };
      setChildrenForInstrumentation = function (children) {
        var debugID = getDebugID(this);
        if (debugID !== 0) {
          ReactInstrumentation.debugTool.onSetChildren(debugID, children ? Object.keys(children).map(function (key) {
            return children[key]._debugID;
          }) : []);
        }
      };
    }
    var ReactMultiChild = { Mixin: {
        _reconcilerInstantiateChildren: function (nestedChildren, transaction, context) {
          if ('production' !== 'production') {
            var selfDebugID = getDebugID(this);
            if (this._currentElement) {
              try {
                ReactCurrentOwner.current = this._currentElement._owner;
                return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context, selfDebugID);
              } finally {
                ReactCurrentOwner.current = null;
              }
            }
          }
          return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
        },
        _reconcilerUpdateChildren: function (prevChildren, nextNestedChildrenElements, mountImages, removedNodes, transaction, context) {
          var nextChildren;
          var selfDebugID = 0;
          if ('production' !== 'production') {
            selfDebugID = getDebugID(this);
            if (this._currentElement) {
              try {
                ReactCurrentOwner.current = this._currentElement._owner;
                nextChildren = flattenChildren(nextNestedChildrenElements, selfDebugID);
              } finally {
                ReactCurrentOwner.current = null;
              }
              ReactChildReconciler.updateChildren(prevChildren, nextChildren, mountImages, removedNodes, transaction, this, this._hostContainerInfo, context, selfDebugID);
              return nextChildren;
            }
          }
          nextChildren = flattenChildren(nextNestedChildrenElements, selfDebugID);
          ReactChildReconciler.updateChildren(prevChildren, nextChildren, mountImages, removedNodes, transaction, this, this._hostContainerInfo, context, selfDebugID);
          return nextChildren;
        },
        mountChildren: function (nestedChildren, transaction, context) {
          var children = this._reconcilerInstantiateChildren(nestedChildren, transaction, context);
          this._renderedChildren = children;
          var mountImages = [];
          var index = 0;
          for (var name in children) {
            if (children.hasOwnProperty(name)) {
              var child = children[name];
              var selfDebugID = 0;
              if ('production' !== 'production') {
                selfDebugID = getDebugID(this);
              }
              var mountImage = ReactReconciler.mountComponent(child, transaction, this, this._hostContainerInfo, context, selfDebugID);
              child._mountIndex = index++;
              mountImages.push(mountImage);
            }
          }
          if ('production' !== 'production') {
            setChildrenForInstrumentation.call(this, children);
          }
          return mountImages;
        },
        updateTextContent: function (nextContent) {
          var prevChildren = this._renderedChildren;
          ReactChildReconciler.unmountChildren(prevChildren, false);
          for (var name in prevChildren) {
            if (prevChildren.hasOwnProperty(name)) {
              !false ? 'production' !== 'production' ? invariant(false, 'updateTextContent called on non-empty component.') : _prodInvariant('118') : void 0;
            }
          }
          var updates = [makeTextContent(nextContent)];
          processQueue(this, updates);
        },
        updateMarkup: function (nextMarkup) {
          var prevChildren = this._renderedChildren;
          ReactChildReconciler.unmountChildren(prevChildren, false);
          for (var name in prevChildren) {
            if (prevChildren.hasOwnProperty(name)) {
              !false ? 'production' !== 'production' ? invariant(false, 'updateTextContent called on non-empty component.') : _prodInvariant('118') : void 0;
            }
          }
          var updates = [makeSetMarkup(nextMarkup)];
          processQueue(this, updates);
        },
        updateChildren: function (nextNestedChildrenElements, transaction, context) {
          this._updateChildren(nextNestedChildrenElements, transaction, context);
        },
        _updateChildren: function (nextNestedChildrenElements, transaction, context) {
          var prevChildren = this._renderedChildren;
          var removedNodes = {};
          var mountImages = [];
          var nextChildren = this._reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, mountImages, removedNodes, transaction, context);
          if (!nextChildren && !prevChildren) {
            return;
          }
          var updates = null;
          var name;
          var nextIndex = 0;
          var lastIndex = 0;
          var nextMountIndex = 0;
          var lastPlacedNode = null;
          for (name in nextChildren) {
            if (!nextChildren.hasOwnProperty(name)) {
              continue;
            }
            var prevChild = prevChildren && prevChildren[name];
            var nextChild = nextChildren[name];
            if (prevChild === nextChild) {
              updates = enqueue(updates, this.moveChild(prevChild, lastPlacedNode, nextIndex, lastIndex));
              lastIndex = Math.max(prevChild._mountIndex, lastIndex);
              prevChild._mountIndex = nextIndex;
            } else {
              if (prevChild) {
                lastIndex = Math.max(prevChild._mountIndex, lastIndex);
              }
              updates = enqueue(updates, this._mountChildAtIndex(nextChild, mountImages[nextMountIndex], lastPlacedNode, nextIndex, transaction, context));
              nextMountIndex++;
            }
            nextIndex++;
            lastPlacedNode = ReactReconciler.getHostNode(nextChild);
          }
          for (name in removedNodes) {
            if (removedNodes.hasOwnProperty(name)) {
              updates = enqueue(updates, this._unmountChild(prevChildren[name], removedNodes[name]));
            }
          }
          if (updates) {
            processQueue(this, updates);
          }
          this._renderedChildren = nextChildren;
          if ('production' !== 'production') {
            setChildrenForInstrumentation.call(this, nextChildren);
          }
        },
        unmountChildren: function (safely) {
          var renderedChildren = this._renderedChildren;
          ReactChildReconciler.unmountChildren(renderedChildren, safely);
          this._renderedChildren = null;
        },
        moveChild: function (child, afterNode, toIndex, lastIndex) {
          if (child._mountIndex < lastIndex) {
            return makeMove(child, afterNode, toIndex);
          }
        },
        createChild: function (child, afterNode, mountImage) {
          return makeInsertMarkup(mountImage, afterNode, child._mountIndex);
        },
        removeChild: function (child, node) {
          return makeRemove(child, node);
        },
        _mountChildAtIndex: function (child, mountImage, afterNode, index, transaction, context) {
          child._mountIndex = index;
          return this.createChild(child, afterNode, mountImage);
        },
        _unmountChild: function (child, node) {
          var update = this.removeChild(child, node);
          child._mountIndex = null;
          return update;
        }
      } };
    module.exports = ReactMultiChild;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactServerUpdateQueue.js', ['npm:react-dom@15.4.2/lib/ReactUpdateQueue.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var ReactUpdateQueue = $__require('npm:react-dom@15.4.2/lib/ReactUpdateQueue.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    function warnNoop(publicInstance, callerName) {
      if ('production' !== 'production') {
        var constructor = publicInstance.constructor;
        'production' !== 'production' ? warning(false, '%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
      }
    }
    var ReactServerUpdateQueue = function () {
      function ReactServerUpdateQueue(transaction) {
        _classCallCheck(this, ReactServerUpdateQueue);
        this.transaction = transaction;
      }
      ReactServerUpdateQueue.prototype.isMounted = function isMounted(publicInstance) {
        return false;
      };
      ReactServerUpdateQueue.prototype.enqueueCallback = function enqueueCallback(publicInstance, callback, callerName) {
        if (this.transaction.isInTransaction()) {
          ReactUpdateQueue.enqueueCallback(publicInstance, callback, callerName);
        }
      };
      ReactServerUpdateQueue.prototype.enqueueForceUpdate = function enqueueForceUpdate(publicInstance) {
        if (this.transaction.isInTransaction()) {
          ReactUpdateQueue.enqueueForceUpdate(publicInstance);
        } else {
          warnNoop(publicInstance, 'forceUpdate');
        }
      };
      ReactServerUpdateQueue.prototype.enqueueReplaceState = function enqueueReplaceState(publicInstance, completeState) {
        if (this.transaction.isInTransaction()) {
          ReactUpdateQueue.enqueueReplaceState(publicInstance, completeState);
        } else {
          warnNoop(publicInstance, 'replaceState');
        }
      };
      ReactServerUpdateQueue.prototype.enqueueSetState = function enqueueSetState(publicInstance, partialState) {
        if (this.transaction.isInTransaction()) {
          ReactUpdateQueue.enqueueSetState(publicInstance, partialState);
        } else {
          warnNoop(publicInstance, 'setState');
        }
      };
      return ReactServerUpdateQueue;
    }();
    module.exports = ReactServerUpdateQueue;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactServerRenderingTransaction.js', ['npm:object-assign@4.1.1.js', 'npm:react-dom@15.4.2/lib/PooledClass.js', 'npm:react-dom@15.4.2/lib/Transaction.js', 'npm:react-dom@15.4.2/lib/ReactInstrumentation.js', 'npm:react-dom@15.4.2/lib/ReactServerUpdateQueue.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _assign = $__require('npm:object-assign@4.1.1.js');
    var PooledClass = $__require('npm:react-dom@15.4.2/lib/PooledClass.js');
    var Transaction = $__require('npm:react-dom@15.4.2/lib/Transaction.js');
    var ReactInstrumentation = $__require('npm:react-dom@15.4.2/lib/ReactInstrumentation.js');
    var ReactServerUpdateQueue = $__require('npm:react-dom@15.4.2/lib/ReactServerUpdateQueue.js');
    var TRANSACTION_WRAPPERS = [];
    if ('production' !== 'production') {
      TRANSACTION_WRAPPERS.push({
        initialize: ReactInstrumentation.debugTool.onBeginFlush,
        close: ReactInstrumentation.debugTool.onEndFlush
      });
    }
    var noopCallbackQueue = { enqueue: function () {} };
    function ReactServerRenderingTransaction(renderToStaticMarkup) {
      this.reinitializeTransaction();
      this.renderToStaticMarkup = renderToStaticMarkup;
      this.useCreateElement = false;
      this.updateQueue = new ReactServerUpdateQueue(this);
    }
    var Mixin = {
      getTransactionWrappers: function () {
        return TRANSACTION_WRAPPERS;
      },
      getReactMountReady: function () {
        return noopCallbackQueue;
      },
      getUpdateQueue: function () {
        return this.updateQueue;
      },
      destructor: function () {},
      checkpoint: function () {},
      rollback: function () {}
    };
    _assign(ReactServerRenderingTransaction.prototype, Transaction, Mixin);
    PooledClass.addPoolingTo(ReactServerRenderingTransaction);
    module.exports = ReactServerRenderingTransaction;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactDOMComponent.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:object-assign@4.1.1.js', 'npm:react-dom@15.4.2/lib/AutoFocusUtils.js', 'npm:react-dom@15.4.2/lib/CSSPropertyOperations.js', 'npm:react-dom@15.4.2/lib/DOMLazyTree.js', 'npm:react-dom@15.4.2/lib/DOMNamespaces.js', 'npm:react-dom@15.4.2/lib/DOMProperty.js', 'npm:react-dom@15.4.2/lib/DOMPropertyOperations.js', 'npm:react-dom@15.4.2/lib/EventPluginHub.js', 'npm:react-dom@15.4.2/lib/EventPluginRegistry.js', 'npm:react-dom@15.4.2/lib/ReactBrowserEventEmitter.js', 'npm:react-dom@15.4.2/lib/ReactDOMComponentFlags.js', 'npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js', 'npm:react-dom@15.4.2/lib/ReactDOMInput.js', 'npm:react-dom@15.4.2/lib/ReactDOMOption.js', 'npm:react-dom@15.4.2/lib/ReactDOMSelect.js', 'npm:react-dom@15.4.2/lib/ReactDOMTextarea.js', 'npm:react-dom@15.4.2/lib/ReactInstrumentation.js', 'npm:react-dom@15.4.2/lib/ReactMultiChild.js', 'npm:react-dom@15.4.2/lib/ReactServerRenderingTransaction.js', 'npm:fbjs@0.8.9/lib/emptyFunction.js', 'npm:react-dom@15.4.2/lib/escapeTextContentForBrowser.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'npm:react-dom@15.4.2/lib/isEventSupported.js', 'npm:fbjs@0.8.9/lib/shallowEqual.js', 'npm:react-dom@15.4.2/lib/validateDOMNesting.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js'),
        _assign = $__require('npm:object-assign@4.1.1.js');
    var AutoFocusUtils = $__require('npm:react-dom@15.4.2/lib/AutoFocusUtils.js');
    var CSSPropertyOperations = $__require('npm:react-dom@15.4.2/lib/CSSPropertyOperations.js');
    var DOMLazyTree = $__require('npm:react-dom@15.4.2/lib/DOMLazyTree.js');
    var DOMNamespaces = $__require('npm:react-dom@15.4.2/lib/DOMNamespaces.js');
    var DOMProperty = $__require('npm:react-dom@15.4.2/lib/DOMProperty.js');
    var DOMPropertyOperations = $__require('npm:react-dom@15.4.2/lib/DOMPropertyOperations.js');
    var EventPluginHub = $__require('npm:react-dom@15.4.2/lib/EventPluginHub.js');
    var EventPluginRegistry = $__require('npm:react-dom@15.4.2/lib/EventPluginRegistry.js');
    var ReactBrowserEventEmitter = $__require('npm:react-dom@15.4.2/lib/ReactBrowserEventEmitter.js');
    var ReactDOMComponentFlags = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponentFlags.js');
    var ReactDOMComponentTree = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js');
    var ReactDOMInput = $__require('npm:react-dom@15.4.2/lib/ReactDOMInput.js');
    var ReactDOMOption = $__require('npm:react-dom@15.4.2/lib/ReactDOMOption.js');
    var ReactDOMSelect = $__require('npm:react-dom@15.4.2/lib/ReactDOMSelect.js');
    var ReactDOMTextarea = $__require('npm:react-dom@15.4.2/lib/ReactDOMTextarea.js');
    var ReactInstrumentation = $__require('npm:react-dom@15.4.2/lib/ReactInstrumentation.js');
    var ReactMultiChild = $__require('npm:react-dom@15.4.2/lib/ReactMultiChild.js');
    var ReactServerRenderingTransaction = $__require('npm:react-dom@15.4.2/lib/ReactServerRenderingTransaction.js');
    var emptyFunction = $__require('npm:fbjs@0.8.9/lib/emptyFunction.js');
    var escapeTextContentForBrowser = $__require('npm:react-dom@15.4.2/lib/escapeTextContentForBrowser.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var isEventSupported = $__require('npm:react-dom@15.4.2/lib/isEventSupported.js');
    var shallowEqual = $__require('npm:fbjs@0.8.9/lib/shallowEqual.js');
    var validateDOMNesting = $__require('npm:react-dom@15.4.2/lib/validateDOMNesting.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var Flags = ReactDOMComponentFlags;
    var deleteListener = EventPluginHub.deleteListener;
    var getNode = ReactDOMComponentTree.getNodeFromInstance;
    var listenTo = ReactBrowserEventEmitter.listenTo;
    var registrationNameModules = EventPluginRegistry.registrationNameModules;
    var CONTENT_TYPES = {
      'string': true,
      'number': true
    };
    var STYLE = 'style';
    var HTML = '__html';
    var RESERVED_PROPS = {
      children: null,
      dangerouslySetInnerHTML: null,
      suppressContentEditableWarning: null
    };
    var DOC_FRAGMENT_TYPE = 11;
    function getDeclarationErrorAddendum(internalInstance) {
      if (internalInstance) {
        var owner = internalInstance._currentElement._owner || null;
        if (owner) {
          var name = owner.getName();
          if (name) {
            return ' This DOM node was rendered by `' + name + '`.';
          }
        }
      }
      return '';
    }
    function friendlyStringify(obj) {
      if (typeof obj === 'object') {
        if (Array.isArray(obj)) {
          return '[' + obj.map(friendlyStringify).join(', ') + ']';
        } else {
          var pairs = [];
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var keyEscaped = /^[a-z$_][\w$_]*$/i.test(key) ? key : JSON.stringify(key);
              pairs.push(keyEscaped + ': ' + friendlyStringify(obj[key]));
            }
          }
          return '{' + pairs.join(', ') + '}';
        }
      } else if (typeof obj === 'string') {
        return JSON.stringify(obj);
      } else if (typeof obj === 'function') {
        return '[function object]';
      }
      return String(obj);
    }
    var styleMutationWarning = {};
    function checkAndWarnForMutatedStyle(style1, style2, component) {
      if (style1 == null || style2 == null) {
        return;
      }
      if (shallowEqual(style1, style2)) {
        return;
      }
      var componentName = component._tag;
      var owner = component._currentElement._owner;
      var ownerName;
      if (owner) {
        ownerName = owner.getName();
      }
      var hash = ownerName + '|' + componentName;
      if (styleMutationWarning.hasOwnProperty(hash)) {
        return;
      }
      styleMutationWarning[hash] = true;
      'production' !== 'production' ? warning(false, '`%s` was passed a style object that has previously been mutated. ' + 'Mutating `style` is deprecated. Consider cloning it beforehand. Check ' + 'the `render` %s. Previous style: %s. Mutated style: %s.', componentName, owner ? 'of `' + ownerName + '`' : 'using <' + componentName + '>', friendlyStringify(style1), friendlyStringify(style2)) : void 0;
    }
    function assertValidProps(component, props) {
      if (!props) {
        return;
      }
      if (voidElementTags[component._tag]) {
        !(props.children == null && props.dangerouslySetInnerHTML == null) ? 'production' !== 'production' ? invariant(false, '%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s', component._tag, component._currentElement._owner ? ' Check the render method of ' + component._currentElement._owner.getName() + '.' : '') : _prodInvariant('137', component._tag, component._currentElement._owner ? ' Check the render method of ' + component._currentElement._owner.getName() + '.' : '') : void 0;
      }
      if (props.dangerouslySetInnerHTML != null) {
        !(props.children == null) ? 'production' !== 'production' ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : _prodInvariant('60') : void 0;
        !(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML) ? 'production' !== 'production' ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.') : _prodInvariant('61') : void 0;
      }
      if ('production' !== 'production') {
        'production' !== 'production' ? warning(props.innerHTML == null, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.') : void 0;
        'production' !== 'production' ? warning(props.suppressContentEditableWarning || !props.contentEditable || props.children == null, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : void 0;
        'production' !== 'production' ? warning(props.onFocusIn == null && props.onFocusOut == null, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.') : void 0;
      }
      !(props.style == null || typeof props.style === 'object') ? 'production' !== 'production' ? invariant(false, 'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s', getDeclarationErrorAddendum(component)) : _prodInvariant('62', getDeclarationErrorAddendum(component)) : void 0;
    }
    function enqueuePutListener(inst, registrationName, listener, transaction) {
      if (transaction instanceof ReactServerRenderingTransaction) {
        return;
      }
      if ('production' !== 'production') {
        'production' !== 'production' ? warning(registrationName !== 'onScroll' || isEventSupported('scroll', true), 'This browser doesn\'t support the `onScroll` event') : void 0;
      }
      var containerInfo = inst._hostContainerInfo;
      var isDocumentFragment = containerInfo._node && containerInfo._node.nodeType === DOC_FRAGMENT_TYPE;
      var doc = isDocumentFragment ? containerInfo._node : containerInfo._ownerDocument;
      listenTo(registrationName, doc);
      transaction.getReactMountReady().enqueue(putListener, {
        inst: inst,
        registrationName: registrationName,
        listener: listener
      });
    }
    function putListener() {
      var listenerToPut = this;
      EventPluginHub.putListener(listenerToPut.inst, listenerToPut.registrationName, listenerToPut.listener);
    }
    function inputPostMount() {
      var inst = this;
      ReactDOMInput.postMountWrapper(inst);
    }
    function textareaPostMount() {
      var inst = this;
      ReactDOMTextarea.postMountWrapper(inst);
    }
    function optionPostMount() {
      var inst = this;
      ReactDOMOption.postMountWrapper(inst);
    }
    var setAndValidateContentChildDev = emptyFunction;
    if ('production' !== 'production') {
      setAndValidateContentChildDev = function (content) {
        var hasExistingContent = this._contentDebugID != null;
        var debugID = this._debugID;
        var contentDebugID = -debugID;
        if (content == null) {
          if (hasExistingContent) {
            ReactInstrumentation.debugTool.onUnmountComponent(this._contentDebugID);
          }
          this._contentDebugID = null;
          return;
        }
        validateDOMNesting(null, String(content), this, this._ancestorInfo);
        this._contentDebugID = contentDebugID;
        if (hasExistingContent) {
          ReactInstrumentation.debugTool.onBeforeUpdateComponent(contentDebugID, content);
          ReactInstrumentation.debugTool.onUpdateComponent(contentDebugID);
        } else {
          ReactInstrumentation.debugTool.onBeforeMountComponent(contentDebugID, content, debugID);
          ReactInstrumentation.debugTool.onMountComponent(contentDebugID);
          ReactInstrumentation.debugTool.onSetChildren(debugID, [contentDebugID]);
        }
      };
    }
    var mediaEvents = {
      topAbort: 'abort',
      topCanPlay: 'canplay',
      topCanPlayThrough: 'canplaythrough',
      topDurationChange: 'durationchange',
      topEmptied: 'emptied',
      topEncrypted: 'encrypted',
      topEnded: 'ended',
      topError: 'error',
      topLoadedData: 'loadeddata',
      topLoadedMetadata: 'loadedmetadata',
      topLoadStart: 'loadstart',
      topPause: 'pause',
      topPlay: 'play',
      topPlaying: 'playing',
      topProgress: 'progress',
      topRateChange: 'ratechange',
      topSeeked: 'seeked',
      topSeeking: 'seeking',
      topStalled: 'stalled',
      topSuspend: 'suspend',
      topTimeUpdate: 'timeupdate',
      topVolumeChange: 'volumechange',
      topWaiting: 'waiting'
    };
    function trapBubbledEventsLocal() {
      var inst = this;
      !inst._rootNodeID ? 'production' !== 'production' ? invariant(false, 'Must be mounted to trap events') : _prodInvariant('63') : void 0;
      var node = getNode(inst);
      !node ? 'production' !== 'production' ? invariant(false, 'trapBubbledEvent(...): Requires node to be rendered.') : _prodInvariant('64') : void 0;
      switch (inst._tag) {
        case 'iframe':
        case 'object':
          inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent('topLoad', 'load', node)];
          break;
        case 'video':
        case 'audio':
          inst._wrapperState.listeners = [];
          for (var event in mediaEvents) {
            if (mediaEvents.hasOwnProperty(event)) {
              inst._wrapperState.listeners.push(ReactBrowserEventEmitter.trapBubbledEvent(event, mediaEvents[event], node));
            }
          }
          break;
        case 'source':
          inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent('topError', 'error', node)];
          break;
        case 'img':
          inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent('topError', 'error', node), ReactBrowserEventEmitter.trapBubbledEvent('topLoad', 'load', node)];
          break;
        case 'form':
          inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent('topReset', 'reset', node), ReactBrowserEventEmitter.trapBubbledEvent('topSubmit', 'submit', node)];
          break;
        case 'input':
        case 'select':
        case 'textarea':
          inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent('topInvalid', 'invalid', node)];
          break;
      }
    }
    function postUpdateSelectWrapper() {
      ReactDOMSelect.postUpdateWrapper(this);
    }
    var omittedCloseTags = {
      'area': true,
      'base': true,
      'br': true,
      'col': true,
      'embed': true,
      'hr': true,
      'img': true,
      'input': true,
      'keygen': true,
      'link': true,
      'meta': true,
      'param': true,
      'source': true,
      'track': true,
      'wbr': true
    };
    var newlineEatingTags = {
      'listing': true,
      'pre': true,
      'textarea': true
    };
    var voidElementTags = _assign({ 'menuitem': true }, omittedCloseTags);
    var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var validatedTagCache = {};
    var hasOwnProperty = {}.hasOwnProperty;
    function validateDangerousTag(tag) {
      if (!hasOwnProperty.call(validatedTagCache, tag)) {
        !VALID_TAG_REGEX.test(tag) ? 'production' !== 'production' ? invariant(false, 'Invalid tag: %s', tag) : _prodInvariant('65', tag) : void 0;
        validatedTagCache[tag] = true;
      }
    }
    function isCustomComponent(tagName, props) {
      return tagName.indexOf('-') >= 0 || props.is != null;
    }
    var globalIdCounter = 1;
    function ReactDOMComponent(element) {
      var tag = element.type;
      validateDangerousTag(tag);
      this._currentElement = element;
      this._tag = tag.toLowerCase();
      this._namespaceURI = null;
      this._renderedChildren = null;
      this._previousStyle = null;
      this._previousStyleCopy = null;
      this._hostNode = null;
      this._hostParent = null;
      this._rootNodeID = 0;
      this._domID = 0;
      this._hostContainerInfo = null;
      this._wrapperState = null;
      this._topLevelWrapper = null;
      this._flags = 0;
      if ('production' !== 'production') {
        this._ancestorInfo = null;
        setAndValidateContentChildDev.call(this, null);
      }
    }
    ReactDOMComponent.displayName = 'ReactDOMComponent';
    ReactDOMComponent.Mixin = {
      mountComponent: function (transaction, hostParent, hostContainerInfo, context) {
        this._rootNodeID = globalIdCounter++;
        this._domID = hostContainerInfo._idCounter++;
        this._hostParent = hostParent;
        this._hostContainerInfo = hostContainerInfo;
        var props = this._currentElement.props;
        switch (this._tag) {
          case 'audio':
          case 'form':
          case 'iframe':
          case 'img':
          case 'link':
          case 'object':
          case 'source':
          case 'video':
            this._wrapperState = { listeners: null };
            transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
            break;
          case 'input':
            ReactDOMInput.mountWrapper(this, props, hostParent);
            props = ReactDOMInput.getHostProps(this, props);
            transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
            break;
          case 'option':
            ReactDOMOption.mountWrapper(this, props, hostParent);
            props = ReactDOMOption.getHostProps(this, props);
            break;
          case 'select':
            ReactDOMSelect.mountWrapper(this, props, hostParent);
            props = ReactDOMSelect.getHostProps(this, props);
            transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
            break;
          case 'textarea':
            ReactDOMTextarea.mountWrapper(this, props, hostParent);
            props = ReactDOMTextarea.getHostProps(this, props);
            transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
            break;
        }
        assertValidProps(this, props);
        var namespaceURI;
        var parentTag;
        if (hostParent != null) {
          namespaceURI = hostParent._namespaceURI;
          parentTag = hostParent._tag;
        } else if (hostContainerInfo._tag) {
          namespaceURI = hostContainerInfo._namespaceURI;
          parentTag = hostContainerInfo._tag;
        }
        if (namespaceURI == null || namespaceURI === DOMNamespaces.svg && parentTag === 'foreignobject') {
          namespaceURI = DOMNamespaces.html;
        }
        if (namespaceURI === DOMNamespaces.html) {
          if (this._tag === 'svg') {
            namespaceURI = DOMNamespaces.svg;
          } else if (this._tag === 'math') {
            namespaceURI = DOMNamespaces.mathml;
          }
        }
        this._namespaceURI = namespaceURI;
        if ('production' !== 'production') {
          var parentInfo;
          if (hostParent != null) {
            parentInfo = hostParent._ancestorInfo;
          } else if (hostContainerInfo._tag) {
            parentInfo = hostContainerInfo._ancestorInfo;
          }
          if (parentInfo) {
            validateDOMNesting(this._tag, null, this, parentInfo);
          }
          this._ancestorInfo = validateDOMNesting.updatedAncestorInfo(parentInfo, this._tag, this);
        }
        var mountImage;
        if (transaction.useCreateElement) {
          var ownerDocument = hostContainerInfo._ownerDocument;
          var el;
          if (namespaceURI === DOMNamespaces.html) {
            if (this._tag === 'script') {
              var div = ownerDocument.createElement('div');
              var type = this._currentElement.type;
              div.innerHTML = '<' + type + '></' + type + '>';
              el = div.removeChild(div.firstChild);
            } else if (props.is) {
              el = ownerDocument.createElement(this._currentElement.type, props.is);
            } else {
              el = ownerDocument.createElement(this._currentElement.type);
            }
          } else {
            el = ownerDocument.createElementNS(namespaceURI, this._currentElement.type);
          }
          ReactDOMComponentTree.precacheNode(this, el);
          this._flags |= Flags.hasCachedChildNodes;
          if (!this._hostParent) {
            DOMPropertyOperations.setAttributeForRoot(el);
          }
          this._updateDOMProperties(null, props, transaction);
          var lazyTree = DOMLazyTree(el);
          this._createInitialChildren(transaction, props, context, lazyTree);
          mountImage = lazyTree;
        } else {
          var tagOpen = this._createOpenTagMarkupAndPutListeners(transaction, props);
          var tagContent = this._createContentMarkup(transaction, props, context);
          if (!tagContent && omittedCloseTags[this._tag]) {
            mountImage = tagOpen + '/>';
          } else {
            mountImage = tagOpen + '>' + tagContent + '</' + this._currentElement.type + '>';
          }
        }
        switch (this._tag) {
          case 'input':
            transaction.getReactMountReady().enqueue(inputPostMount, this);
            if (props.autoFocus) {
              transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
            }
            break;
          case 'textarea':
            transaction.getReactMountReady().enqueue(textareaPostMount, this);
            if (props.autoFocus) {
              transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
            }
            break;
          case 'select':
            if (props.autoFocus) {
              transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
            }
            break;
          case 'button':
            if (props.autoFocus) {
              transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
            }
            break;
          case 'option':
            transaction.getReactMountReady().enqueue(optionPostMount, this);
            break;
        }
        return mountImage;
      },
      _createOpenTagMarkupAndPutListeners: function (transaction, props) {
        var ret = '<' + this._currentElement.type;
        for (var propKey in props) {
          if (!props.hasOwnProperty(propKey)) {
            continue;
          }
          var propValue = props[propKey];
          if (propValue == null) {
            continue;
          }
          if (registrationNameModules.hasOwnProperty(propKey)) {
            if (propValue) {
              enqueuePutListener(this, propKey, propValue, transaction);
            }
          } else {
            if (propKey === STYLE) {
              if (propValue) {
                if ('production' !== 'production') {
                  this._previousStyle = propValue;
                }
                propValue = this._previousStyleCopy = _assign({}, props.style);
              }
              propValue = CSSPropertyOperations.createMarkupForStyles(propValue, this);
            }
            var markup = null;
            if (this._tag != null && isCustomComponent(this._tag, props)) {
              if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
                markup = DOMPropertyOperations.createMarkupForCustomAttribute(propKey, propValue);
              }
            } else {
              markup = DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
            }
            if (markup) {
              ret += ' ' + markup;
            }
          }
        }
        if (transaction.renderToStaticMarkup) {
          return ret;
        }
        if (!this._hostParent) {
          ret += ' ' + DOMPropertyOperations.createMarkupForRoot();
        }
        ret += ' ' + DOMPropertyOperations.createMarkupForID(this._domID);
        return ret;
      },
      _createContentMarkup: function (transaction, props, context) {
        var ret = '';
        var innerHTML = props.dangerouslySetInnerHTML;
        if (innerHTML != null) {
          if (innerHTML.__html != null) {
            ret = innerHTML.__html;
          }
        } else {
          var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
          var childrenToUse = contentToUse != null ? null : props.children;
          if (contentToUse != null) {
            ret = escapeTextContentForBrowser(contentToUse);
            if ('production' !== 'production') {
              setAndValidateContentChildDev.call(this, contentToUse);
            }
          } else if (childrenToUse != null) {
            var mountImages = this.mountChildren(childrenToUse, transaction, context);
            ret = mountImages.join('');
          }
        }
        if (newlineEatingTags[this._tag] && ret.charAt(0) === '\n') {
          return '\n' + ret;
        } else {
          return ret;
        }
      },
      _createInitialChildren: function (transaction, props, context, lazyTree) {
        var innerHTML = props.dangerouslySetInnerHTML;
        if (innerHTML != null) {
          if (innerHTML.__html != null) {
            DOMLazyTree.queueHTML(lazyTree, innerHTML.__html);
          }
        } else {
          var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
          var childrenToUse = contentToUse != null ? null : props.children;
          if (contentToUse != null) {
            if (contentToUse !== '') {
              if ('production' !== 'production') {
                setAndValidateContentChildDev.call(this, contentToUse);
              }
              DOMLazyTree.queueText(lazyTree, contentToUse);
            }
          } else if (childrenToUse != null) {
            var mountImages = this.mountChildren(childrenToUse, transaction, context);
            for (var i = 0; i < mountImages.length; i++) {
              DOMLazyTree.queueChild(lazyTree, mountImages[i]);
            }
          }
        }
      },
      receiveComponent: function (nextElement, transaction, context) {
        var prevElement = this._currentElement;
        this._currentElement = nextElement;
        this.updateComponent(transaction, prevElement, nextElement, context);
      },
      updateComponent: function (transaction, prevElement, nextElement, context) {
        var lastProps = prevElement.props;
        var nextProps = this._currentElement.props;
        switch (this._tag) {
          case 'input':
            lastProps = ReactDOMInput.getHostProps(this, lastProps);
            nextProps = ReactDOMInput.getHostProps(this, nextProps);
            break;
          case 'option':
            lastProps = ReactDOMOption.getHostProps(this, lastProps);
            nextProps = ReactDOMOption.getHostProps(this, nextProps);
            break;
          case 'select':
            lastProps = ReactDOMSelect.getHostProps(this, lastProps);
            nextProps = ReactDOMSelect.getHostProps(this, nextProps);
            break;
          case 'textarea':
            lastProps = ReactDOMTextarea.getHostProps(this, lastProps);
            nextProps = ReactDOMTextarea.getHostProps(this, nextProps);
            break;
        }
        assertValidProps(this, nextProps);
        this._updateDOMProperties(lastProps, nextProps, transaction);
        this._updateDOMChildren(lastProps, nextProps, transaction, context);
        switch (this._tag) {
          case 'input':
            ReactDOMInput.updateWrapper(this);
            break;
          case 'textarea':
            ReactDOMTextarea.updateWrapper(this);
            break;
          case 'select':
            transaction.getReactMountReady().enqueue(postUpdateSelectWrapper, this);
            break;
        }
      },
      _updateDOMProperties: function (lastProps, nextProps, transaction) {
        var propKey;
        var styleName;
        var styleUpdates;
        for (propKey in lastProps) {
          if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null) {
            continue;
          }
          if (propKey === STYLE) {
            var lastStyle = this._previousStyleCopy;
            for (styleName in lastStyle) {
              if (lastStyle.hasOwnProperty(styleName)) {
                styleUpdates = styleUpdates || {};
                styleUpdates[styleName] = '';
              }
            }
            this._previousStyleCopy = null;
          } else if (registrationNameModules.hasOwnProperty(propKey)) {
            if (lastProps[propKey]) {
              deleteListener(this, propKey);
            }
          } else if (isCustomComponent(this._tag, lastProps)) {
            if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
              DOMPropertyOperations.deleteValueForAttribute(getNode(this), propKey);
            }
          } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
            DOMPropertyOperations.deleteValueForProperty(getNode(this), propKey);
          }
        }
        for (propKey in nextProps) {
          var nextProp = nextProps[propKey];
          var lastProp = propKey === STYLE ? this._previousStyleCopy : lastProps != null ? lastProps[propKey] : undefined;
          if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
            continue;
          }
          if (propKey === STYLE) {
            if (nextProp) {
              if ('production' !== 'production') {
                checkAndWarnForMutatedStyle(this._previousStyleCopy, this._previousStyle, this);
                this._previousStyle = nextProp;
              }
              nextProp = this._previousStyleCopy = _assign({}, nextProp);
            } else {
              this._previousStyleCopy = null;
            }
            if (lastProp) {
              for (styleName in lastProp) {
                if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
                  styleUpdates = styleUpdates || {};
                  styleUpdates[styleName] = '';
                }
              }
              for (styleName in nextProp) {
                if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
                  styleUpdates = styleUpdates || {};
                  styleUpdates[styleName] = nextProp[styleName];
                }
              }
            } else {
              styleUpdates = nextProp;
            }
          } else if (registrationNameModules.hasOwnProperty(propKey)) {
            if (nextProp) {
              enqueuePutListener(this, propKey, nextProp, transaction);
            } else if (lastProp) {
              deleteListener(this, propKey);
            }
          } else if (isCustomComponent(this._tag, nextProps)) {
            if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
              DOMPropertyOperations.setValueForAttribute(getNode(this), propKey, nextProp);
            }
          } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
            var node = getNode(this);
            if (nextProp != null) {
              DOMPropertyOperations.setValueForProperty(node, propKey, nextProp);
            } else {
              DOMPropertyOperations.deleteValueForProperty(node, propKey);
            }
          }
        }
        if (styleUpdates) {
          CSSPropertyOperations.setValueForStyles(getNode(this), styleUpdates, this);
        }
      },
      _updateDOMChildren: function (lastProps, nextProps, transaction, context) {
        var lastContent = CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
        var nextContent = CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;
        var lastHtml = lastProps.dangerouslySetInnerHTML && lastProps.dangerouslySetInnerHTML.__html;
        var nextHtml = nextProps.dangerouslySetInnerHTML && nextProps.dangerouslySetInnerHTML.__html;
        var lastChildren = lastContent != null ? null : lastProps.children;
        var nextChildren = nextContent != null ? null : nextProps.children;
        var lastHasContentOrHtml = lastContent != null || lastHtml != null;
        var nextHasContentOrHtml = nextContent != null || nextHtml != null;
        if (lastChildren != null && nextChildren == null) {
          this.updateChildren(null, transaction, context);
        } else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
          this.updateTextContent('');
          if ('production' !== 'production') {
            ReactInstrumentation.debugTool.onSetChildren(this._debugID, []);
          }
        }
        if (nextContent != null) {
          if (lastContent !== nextContent) {
            this.updateTextContent('' + nextContent);
            if ('production' !== 'production') {
              setAndValidateContentChildDev.call(this, nextContent);
            }
          }
        } else if (nextHtml != null) {
          if (lastHtml !== nextHtml) {
            this.updateMarkup('' + nextHtml);
          }
          if ('production' !== 'production') {
            ReactInstrumentation.debugTool.onSetChildren(this._debugID, []);
          }
        } else if (nextChildren != null) {
          if ('production' !== 'production') {
            setAndValidateContentChildDev.call(this, null);
          }
          this.updateChildren(nextChildren, transaction, context);
        }
      },
      getHostNode: function () {
        return getNode(this);
      },
      unmountComponent: function (safely) {
        switch (this._tag) {
          case 'audio':
          case 'form':
          case 'iframe':
          case 'img':
          case 'link':
          case 'object':
          case 'source':
          case 'video':
            var listeners = this._wrapperState.listeners;
            if (listeners) {
              for (var i = 0; i < listeners.length; i++) {
                listeners[i].remove();
              }
            }
            break;
          case 'html':
          case 'head':
          case 'body':
            !false ? 'production' !== 'production' ? invariant(false, '<%s> tried to unmount. Because of cross-browser quirks it is impossible to unmount some top-level components (eg <html>, <head>, and <body>) reliably and efficiently. To fix this, have a single top-level component that never unmounts render these elements.', this._tag) : _prodInvariant('66', this._tag) : void 0;
            break;
        }
        this.unmountChildren(safely);
        ReactDOMComponentTree.uncacheNode(this);
        EventPluginHub.deleteAllListeners(this);
        this._rootNodeID = 0;
        this._domID = 0;
        this._wrapperState = null;
        if ('production' !== 'production') {
          setAndValidateContentChildDev.call(this, null);
        }
      },
      getPublicInstance: function () {
        return getNode(this);
      }
    };
    _assign(ReactDOMComponent.prototype, ReactDOMComponent.Mixin, ReactMultiChild.Mixin);
    module.exports = ReactDOMComponent;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactDOMEmptyComponent.js', ['npm:object-assign@4.1.1.js', 'npm:react-dom@15.4.2/lib/DOMLazyTree.js', 'npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var _assign = $__require('npm:object-assign@4.1.1.js');
  var DOMLazyTree = $__require('npm:react-dom@15.4.2/lib/DOMLazyTree.js');
  var ReactDOMComponentTree = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js');
  var ReactDOMEmptyComponent = function (instantiate) {
    this._currentElement = null;
    this._hostNode = null;
    this._hostParent = null;
    this._hostContainerInfo = null;
    this._domID = 0;
  };
  _assign(ReactDOMEmptyComponent.prototype, {
    mountComponent: function (transaction, hostParent, hostContainerInfo, context) {
      var domID = hostContainerInfo._idCounter++;
      this._domID = domID;
      this._hostParent = hostParent;
      this._hostContainerInfo = hostContainerInfo;
      var nodeValue = ' react-empty: ' + this._domID + ' ';
      if (transaction.useCreateElement) {
        var ownerDocument = hostContainerInfo._ownerDocument;
        var node = ownerDocument.createComment(nodeValue);
        ReactDOMComponentTree.precacheNode(this, node);
        return DOMLazyTree(node);
      } else {
        if (transaction.renderToStaticMarkup) {
          return '';
        }
        return '<!--' + nodeValue + '-->';
      }
    },
    receiveComponent: function () {},
    getHostNode: function () {
      return ReactDOMComponentTree.getNodeFromInstance(this);
    },
    unmountComponent: function () {
      ReactDOMComponentTree.uncacheNode(this);
    }
  });
  module.exports = ReactDOMEmptyComponent;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactDOMTreeTraversal.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    function getLowestCommonAncestor(instA, instB) {
      !('_hostNode' in instA) ? 'production' !== 'production' ? invariant(false, 'getNodeFromInstance: Invalid argument.') : _prodInvariant('33') : void 0;
      !('_hostNode' in instB) ? 'production' !== 'production' ? invariant(false, 'getNodeFromInstance: Invalid argument.') : _prodInvariant('33') : void 0;
      var depthA = 0;
      for (var tempA = instA; tempA; tempA = tempA._hostParent) {
        depthA++;
      }
      var depthB = 0;
      for (var tempB = instB; tempB; tempB = tempB._hostParent) {
        depthB++;
      }
      while (depthA - depthB > 0) {
        instA = instA._hostParent;
        depthA--;
      }
      while (depthB - depthA > 0) {
        instB = instB._hostParent;
        depthB--;
      }
      var depth = depthA;
      while (depth--) {
        if (instA === instB) {
          return instA;
        }
        instA = instA._hostParent;
        instB = instB._hostParent;
      }
      return null;
    }
    function isAncestor(instA, instB) {
      !('_hostNode' in instA) ? 'production' !== 'production' ? invariant(false, 'isAncestor: Invalid argument.') : _prodInvariant('35') : void 0;
      !('_hostNode' in instB) ? 'production' !== 'production' ? invariant(false, 'isAncestor: Invalid argument.') : _prodInvariant('35') : void 0;
      while (instB) {
        if (instB === instA) {
          return true;
        }
        instB = instB._hostParent;
      }
      return false;
    }
    function getParentInstance(inst) {
      !('_hostNode' in inst) ? 'production' !== 'production' ? invariant(false, 'getParentInstance: Invalid argument.') : _prodInvariant('36') : void 0;
      return inst._hostParent;
    }
    function traverseTwoPhase(inst, fn, arg) {
      var path = [];
      while (inst) {
        path.push(inst);
        inst = inst._hostParent;
      }
      var i;
      for (i = path.length; i-- > 0;) {
        fn(path[i], 'captured', arg);
      }
      for (i = 0; i < path.length; i++) {
        fn(path[i], 'bubbled', arg);
      }
    }
    function traverseEnterLeave(from, to, fn, argFrom, argTo) {
      var common = from && to ? getLowestCommonAncestor(from, to) : null;
      var pathFrom = [];
      while (from && from !== common) {
        pathFrom.push(from);
        from = from._hostParent;
      }
      var pathTo = [];
      while (to && to !== common) {
        pathTo.push(to);
        to = to._hostParent;
      }
      var i;
      for (i = 0; i < pathFrom.length; i++) {
        fn(pathFrom[i], 'bubbled', argFrom);
      }
      for (i = pathTo.length; i-- > 0;) {
        fn(pathTo[i], 'captured', argTo);
      }
    }
    module.exports = {
      isAncestor: isAncestor,
      getLowestCommonAncestor: getLowestCommonAncestor,
      getParentInstance: getParentInstance,
      traverseTwoPhase: traverseTwoPhase,
      traverseEnterLeave: traverseEnterLeave
    };
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:fbjs@0.8.9/lib/createArrayFromMixed.js', ['npm:fbjs@0.8.9/lib/invariant.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    function toArray(obj) {
      var length = obj.length;
      !(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function')) ? 'production' !== 'production' ? invariant(false, 'toArray: Array-like object expected') : invariant(false) : void 0;
      !(typeof length === 'number') ? 'production' !== 'production' ? invariant(false, 'toArray: Object needs a length property') : invariant(false) : void 0;
      !(length === 0 || length - 1 in obj) ? 'production' !== 'production' ? invariant(false, 'toArray: Object should have keys for indices') : invariant(false) : void 0;
      !(typeof obj.callee !== 'function') ? 'production' !== 'production' ? invariant(false, 'toArray: Object can\'t be `arguments`. Use rest params ' + '(function(...args) {}) or Array.from() instead.') : invariant(false) : void 0;
      if (obj.hasOwnProperty) {
        try {
          return Array.prototype.slice.call(obj);
        } catch (e) {}
      }
      var ret = Array(length);
      for (var ii = 0; ii < length; ii++) {
        ret[ii] = obj[ii];
      }
      return ret;
    }
    function hasArrayNature(obj) {
      return !!obj && (typeof obj == 'object' || typeof obj == 'function') && 'length' in obj && !('setInterval' in obj) && typeof obj.nodeType != 'number' && (Array.isArray(obj) || 'callee' in obj || 'item' in obj);
    }
    function createArrayFromMixed(obj) {
      if (!hasArrayNature(obj)) {
        return [obj];
      } else if (Array.isArray(obj)) {
        return obj.slice();
      } else {
        return toArray(obj);
      }
    }
    module.exports = createArrayFromMixed;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:fbjs@0.8.9/lib/getMarkupWrap.js', ['npm:fbjs@0.8.9/lib/ExecutionEnvironment.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var ExecutionEnvironment = $__require('npm:fbjs@0.8.9/lib/ExecutionEnvironment.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;
    var shouldWrap = {};
    var selectWrap = [1, '<select multiple="true">', '</select>'];
    var tableWrap = [1, '<table>', '</table>'];
    var trWrap = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
    var svgWrap = [1, '<svg xmlns="http://www.w3.org/2000/svg">', '</svg>'];
    var markupWrap = {
      '*': [1, '?<div>', '</div>'],
      'area': [1, '<map>', '</map>'],
      'col': [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
      'legend': [1, '<fieldset>', '</fieldset>'],
      'param': [1, '<object>', '</object>'],
      'tr': [2, '<table><tbody>', '</tbody></table>'],
      'optgroup': selectWrap,
      'option': selectWrap,
      'caption': tableWrap,
      'colgroup': tableWrap,
      'tbody': tableWrap,
      'tfoot': tableWrap,
      'thead': tableWrap,
      'td': trWrap,
      'th': trWrap
    };
    var svgElements = ['circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'text', 'tspan'];
    svgElements.forEach(function (nodeName) {
      markupWrap[nodeName] = svgWrap;
      shouldWrap[nodeName] = true;
    });
    function getMarkupWrap(nodeName) {
      !!!dummyNode ? 'production' !== 'production' ? invariant(false, 'Markup wrapping node not initialized') : invariant(false) : void 0;
      if (!markupWrap.hasOwnProperty(nodeName)) {
        nodeName = '*';
      }
      if (!shouldWrap.hasOwnProperty(nodeName)) {
        if (nodeName === '*') {
          dummyNode.innerHTML = '<link />';
        } else {
          dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';
        }
        shouldWrap[nodeName] = !dummyNode.firstChild;
      }
      return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
    }
    module.exports = getMarkupWrap;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:fbjs@0.8.9/lib/createNodesFromMarkup.js', ['npm:fbjs@0.8.9/lib/ExecutionEnvironment.js', 'npm:fbjs@0.8.9/lib/createArrayFromMixed.js', 'npm:fbjs@0.8.9/lib/getMarkupWrap.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var ExecutionEnvironment = $__require('npm:fbjs@0.8.9/lib/ExecutionEnvironment.js');
    var createArrayFromMixed = $__require('npm:fbjs@0.8.9/lib/createArrayFromMixed.js');
    var getMarkupWrap = $__require('npm:fbjs@0.8.9/lib/getMarkupWrap.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;
    var nodeNamePattern = /^\s*<(\w+)/;
    function getNodeName(markup) {
      var nodeNameMatch = markup.match(nodeNamePattern);
      return nodeNameMatch && nodeNameMatch[1].toLowerCase();
    }
    function createNodesFromMarkup(markup, handleScript) {
      var node = dummyNode;
      !!!dummyNode ? 'production' !== 'production' ? invariant(false, 'createNodesFromMarkup dummy not initialized') : invariant(false) : void 0;
      var nodeName = getNodeName(markup);
      var wrap = nodeName && getMarkupWrap(nodeName);
      if (wrap) {
        node.innerHTML = wrap[1] + markup + wrap[2];
        var wrapDepth = wrap[0];
        while (wrapDepth--) {
          node = node.lastChild;
        }
      } else {
        node.innerHTML = markup;
      }
      var scripts = node.getElementsByTagName('script');
      if (scripts.length) {
        !handleScript ? 'production' !== 'production' ? invariant(false, 'createNodesFromMarkup(...): Unexpected <script> element rendered.') : invariant(false) : void 0;
        createArrayFromMixed(scripts).forEach(handleScript);
      }
      var nodes = Array.from(node.childNodes);
      while (node.lastChild) {
        node.removeChild(node.lastChild);
      }
      return nodes;
    }
    module.exports = createNodesFromMarkup;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/Danger.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:react-dom@15.4.2/lib/DOMLazyTree.js', 'npm:fbjs@0.8.9/lib/ExecutionEnvironment.js', 'npm:fbjs@0.8.9/lib/createNodesFromMarkup.js', 'npm:fbjs@0.8.9/lib/emptyFunction.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    var DOMLazyTree = $__require('npm:react-dom@15.4.2/lib/DOMLazyTree.js');
    var ExecutionEnvironment = $__require('npm:fbjs@0.8.9/lib/ExecutionEnvironment.js');
    var createNodesFromMarkup = $__require('npm:fbjs@0.8.9/lib/createNodesFromMarkup.js');
    var emptyFunction = $__require('npm:fbjs@0.8.9/lib/emptyFunction.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var Danger = { dangerouslyReplaceNodeWithMarkup: function (oldChild, markup) {
        !ExecutionEnvironment.canUseDOM ? 'production' !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString() for server rendering.') : _prodInvariant('56') : void 0;
        !markup ? 'production' !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Missing markup.') : _prodInvariant('57') : void 0;
        !(oldChild.nodeName !== 'HTML') ? 'production' !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the <html> node. This is because browser quirks make this unreliable and/or slow. If you want to render to the root you must use server rendering. See ReactDOMServer.renderToString().') : _prodInvariant('58') : void 0;
        if (typeof markup === 'string') {
          var newChild = createNodesFromMarkup(markup, emptyFunction)[0];
          oldChild.parentNode.replaceChild(newChild, oldChild);
        } else {
          DOMLazyTree.replaceChildWithTree(oldChild, markup);
        }
      } };
    module.exports = Danger;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/DOMChildrenOperations.js', ['npm:react-dom@15.4.2/lib/DOMLazyTree.js', 'npm:react-dom@15.4.2/lib/Danger.js', 'npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js', 'npm:react-dom@15.4.2/lib/ReactInstrumentation.js', 'npm:react-dom@15.4.2/lib/createMicrosoftUnsafeLocalFunction.js', 'npm:react-dom@15.4.2/lib/setInnerHTML.js', 'npm:react-dom@15.4.2/lib/setTextContent.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var DOMLazyTree = $__require('npm:react-dom@15.4.2/lib/DOMLazyTree.js');
    var Danger = $__require('npm:react-dom@15.4.2/lib/Danger.js');
    var ReactDOMComponentTree = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js');
    var ReactInstrumentation = $__require('npm:react-dom@15.4.2/lib/ReactInstrumentation.js');
    var createMicrosoftUnsafeLocalFunction = $__require('npm:react-dom@15.4.2/lib/createMicrosoftUnsafeLocalFunction.js');
    var setInnerHTML = $__require('npm:react-dom@15.4.2/lib/setInnerHTML.js');
    var setTextContent = $__require('npm:react-dom@15.4.2/lib/setTextContent.js');
    function getNodeAfter(parentNode, node) {
      if (Array.isArray(node)) {
        node = node[1];
      }
      return node ? node.nextSibling : parentNode.firstChild;
    }
    var insertChildAt = createMicrosoftUnsafeLocalFunction(function (parentNode, childNode, referenceNode) {
      parentNode.insertBefore(childNode, referenceNode);
    });
    function insertLazyTreeChildAt(parentNode, childTree, referenceNode) {
      DOMLazyTree.insertTreeBefore(parentNode, childTree, referenceNode);
    }
    function moveChild(parentNode, childNode, referenceNode) {
      if (Array.isArray(childNode)) {
        moveDelimitedText(parentNode, childNode[0], childNode[1], referenceNode);
      } else {
        insertChildAt(parentNode, childNode, referenceNode);
      }
    }
    function removeChild(parentNode, childNode) {
      if (Array.isArray(childNode)) {
        var closingComment = childNode[1];
        childNode = childNode[0];
        removeDelimitedText(parentNode, childNode, closingComment);
        parentNode.removeChild(closingComment);
      }
      parentNode.removeChild(childNode);
    }
    function moveDelimitedText(parentNode, openingComment, closingComment, referenceNode) {
      var node = openingComment;
      while (true) {
        var nextNode = node.nextSibling;
        insertChildAt(parentNode, node, referenceNode);
        if (node === closingComment) {
          break;
        }
        node = nextNode;
      }
    }
    function removeDelimitedText(parentNode, startNode, closingComment) {
      while (true) {
        var node = startNode.nextSibling;
        if (node === closingComment) {
          break;
        } else {
          parentNode.removeChild(node);
        }
      }
    }
    function replaceDelimitedText(openingComment, closingComment, stringText) {
      var parentNode = openingComment.parentNode;
      var nodeAfterComment = openingComment.nextSibling;
      if (nodeAfterComment === closingComment) {
        if (stringText) {
          insertChildAt(parentNode, document.createTextNode(stringText), nodeAfterComment);
        }
      } else {
        if (stringText) {
          setTextContent(nodeAfterComment, stringText);
          removeDelimitedText(parentNode, nodeAfterComment, closingComment);
        } else {
          removeDelimitedText(parentNode, openingComment, closingComment);
        }
      }
      if ('production' !== 'production') {
        ReactInstrumentation.debugTool.onHostOperation({
          instanceID: ReactDOMComponentTree.getInstanceFromNode(openingComment)._debugID,
          type: 'replace text',
          payload: stringText
        });
      }
    }
    var dangerouslyReplaceNodeWithMarkup = Danger.dangerouslyReplaceNodeWithMarkup;
    if ('production' !== 'production') {
      dangerouslyReplaceNodeWithMarkup = function (oldChild, markup, prevInstance) {
        Danger.dangerouslyReplaceNodeWithMarkup(oldChild, markup);
        if (prevInstance._debugID !== 0) {
          ReactInstrumentation.debugTool.onHostOperation({
            instanceID: prevInstance._debugID,
            type: 'replace with',
            payload: markup.toString()
          });
        } else {
          var nextInstance = ReactDOMComponentTree.getInstanceFromNode(markup.node);
          if (nextInstance._debugID !== 0) {
            ReactInstrumentation.debugTool.onHostOperation({
              instanceID: nextInstance._debugID,
              type: 'mount',
              payload: markup.toString()
            });
          }
        }
      };
    }
    var DOMChildrenOperations = {
      dangerouslyReplaceNodeWithMarkup: dangerouslyReplaceNodeWithMarkup,
      replaceDelimitedText: replaceDelimitedText,
      processUpdates: function (parentNode, updates) {
        if ('production' !== 'production') {
          var parentNodeDebugID = ReactDOMComponentTree.getInstanceFromNode(parentNode)._debugID;
        }
        for (var k = 0; k < updates.length; k++) {
          var update = updates[k];
          switch (update.type) {
            case 'INSERT_MARKUP':
              insertLazyTreeChildAt(parentNode, update.content, getNodeAfter(parentNode, update.afterNode));
              if ('production' !== 'production') {
                ReactInstrumentation.debugTool.onHostOperation({
                  instanceID: parentNodeDebugID,
                  type: 'insert child',
                  payload: {
                    toIndex: update.toIndex,
                    content: update.content.toString()
                  }
                });
              }
              break;
            case 'MOVE_EXISTING':
              moveChild(parentNode, update.fromNode, getNodeAfter(parentNode, update.afterNode));
              if ('production' !== 'production') {
                ReactInstrumentation.debugTool.onHostOperation({
                  instanceID: parentNodeDebugID,
                  type: 'move child',
                  payload: {
                    fromIndex: update.fromIndex,
                    toIndex: update.toIndex
                  }
                });
              }
              break;
            case 'SET_MARKUP':
              setInnerHTML(parentNode, update.content);
              if ('production' !== 'production') {
                ReactInstrumentation.debugTool.onHostOperation({
                  instanceID: parentNodeDebugID,
                  type: 'replace children',
                  payload: update.content.toString()
                });
              }
              break;
            case 'TEXT_CONTENT':
              setTextContent(parentNode, update.content);
              if ('production' !== 'production') {
                ReactInstrumentation.debugTool.onHostOperation({
                  instanceID: parentNodeDebugID,
                  type: 'replace text',
                  payload: update.content.toString()
                });
              }
              break;
            case 'REMOVE_NODE':
              removeChild(parentNode, update.fromNode);
              if ('production' !== 'production') {
                ReactInstrumentation.debugTool.onHostOperation({
                  instanceID: parentNodeDebugID,
                  type: 'remove child',
                  payload: { fromIndex: update.fromIndex }
                });
              }
              break;
          }
        }
      }
    };
    module.exports = DOMChildrenOperations;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactDOMTextComponent.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:object-assign@4.1.1.js', 'npm:react-dom@15.4.2/lib/DOMChildrenOperations.js', 'npm:react-dom@15.4.2/lib/DOMLazyTree.js', 'npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js', 'npm:react-dom@15.4.2/lib/escapeTextContentForBrowser.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'npm:react-dom@15.4.2/lib/validateDOMNesting.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js'),
        _assign = $__require('npm:object-assign@4.1.1.js');
    var DOMChildrenOperations = $__require('npm:react-dom@15.4.2/lib/DOMChildrenOperations.js');
    var DOMLazyTree = $__require('npm:react-dom@15.4.2/lib/DOMLazyTree.js');
    var ReactDOMComponentTree = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js');
    var escapeTextContentForBrowser = $__require('npm:react-dom@15.4.2/lib/escapeTextContentForBrowser.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var validateDOMNesting = $__require('npm:react-dom@15.4.2/lib/validateDOMNesting.js');
    var ReactDOMTextComponent = function (text) {
      this._currentElement = text;
      this._stringText = '' + text;
      this._hostNode = null;
      this._hostParent = null;
      this._domID = 0;
      this._mountIndex = 0;
      this._closingComment = null;
      this._commentNodes = null;
    };
    _assign(ReactDOMTextComponent.prototype, {
      mountComponent: function (transaction, hostParent, hostContainerInfo, context) {
        if ('production' !== 'production') {
          var parentInfo;
          if (hostParent != null) {
            parentInfo = hostParent._ancestorInfo;
          } else if (hostContainerInfo != null) {
            parentInfo = hostContainerInfo._ancestorInfo;
          }
          if (parentInfo) {
            validateDOMNesting(null, this._stringText, this, parentInfo);
          }
        }
        var domID = hostContainerInfo._idCounter++;
        var openingValue = ' react-text: ' + domID + ' ';
        var closingValue = ' /react-text ';
        this._domID = domID;
        this._hostParent = hostParent;
        if (transaction.useCreateElement) {
          var ownerDocument = hostContainerInfo._ownerDocument;
          var openingComment = ownerDocument.createComment(openingValue);
          var closingComment = ownerDocument.createComment(closingValue);
          var lazyTree = DOMLazyTree(ownerDocument.createDocumentFragment());
          DOMLazyTree.queueChild(lazyTree, DOMLazyTree(openingComment));
          if (this._stringText) {
            DOMLazyTree.queueChild(lazyTree, DOMLazyTree(ownerDocument.createTextNode(this._stringText)));
          }
          DOMLazyTree.queueChild(lazyTree, DOMLazyTree(closingComment));
          ReactDOMComponentTree.precacheNode(this, openingComment);
          this._closingComment = closingComment;
          return lazyTree;
        } else {
          var escapedText = escapeTextContentForBrowser(this._stringText);
          if (transaction.renderToStaticMarkup) {
            return escapedText;
          }
          return '<!--' + openingValue + '-->' + escapedText + '<!--' + closingValue + '-->';
        }
      },
      receiveComponent: function (nextText, transaction) {
        if (nextText !== this._currentElement) {
          this._currentElement = nextText;
          var nextStringText = '' + nextText;
          if (nextStringText !== this._stringText) {
            this._stringText = nextStringText;
            var commentNodes = this.getHostNode();
            DOMChildrenOperations.replaceDelimitedText(commentNodes[0], commentNodes[1], nextStringText);
          }
        }
      },
      getHostNode: function () {
        var hostNode = this._commentNodes;
        if (hostNode) {
          return hostNode;
        }
        if (!this._closingComment) {
          var openingComment = ReactDOMComponentTree.getNodeFromInstance(this);
          var node = openingComment.nextSibling;
          while (true) {
            !(node != null) ? 'production' !== 'production' ? invariant(false, 'Missing closing comment for text component %s', this._domID) : _prodInvariant('67', this._domID) : void 0;
            if (node.nodeType === 8 && node.nodeValue === ' /react-text ') {
              this._closingComment = node;
              break;
            }
            node = node.nextSibling;
          }
        }
        hostNode = [this._hostNode, this._closingComment];
        this._commentNodes = hostNode;
        return hostNode;
      },
      unmountComponent: function () {
        this._closingComment = null;
        this._commentNodes = null;
        ReactDOMComponentTree.uncacheNode(this);
      }
    });
    module.exports = ReactDOMTextComponent;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactDefaultBatchingStrategy.js', ['npm:object-assign@4.1.1.js', 'npm:react-dom@15.4.2/lib/ReactUpdates.js', 'npm:react-dom@15.4.2/lib/Transaction.js', 'npm:fbjs@0.8.9/lib/emptyFunction.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var _assign = $__require('npm:object-assign@4.1.1.js');
  var ReactUpdates = $__require('npm:react-dom@15.4.2/lib/ReactUpdates.js');
  var Transaction = $__require('npm:react-dom@15.4.2/lib/Transaction.js');
  var emptyFunction = $__require('npm:fbjs@0.8.9/lib/emptyFunction.js');
  var RESET_BATCHED_UPDATES = {
    initialize: emptyFunction,
    close: function () {
      ReactDefaultBatchingStrategy.isBatchingUpdates = false;
    }
  };
  var FLUSH_BATCHED_UPDATES = {
    initialize: emptyFunction,
    close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
  };
  var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];
  function ReactDefaultBatchingStrategyTransaction() {
    this.reinitializeTransaction();
  }
  _assign(ReactDefaultBatchingStrategyTransaction.prototype, Transaction, { getTransactionWrappers: function () {
      return TRANSACTION_WRAPPERS;
    } });
  var transaction = new ReactDefaultBatchingStrategyTransaction();
  var ReactDefaultBatchingStrategy = {
    isBatchingUpdates: false,
    batchedUpdates: function (callback, a, b, c, d, e) {
      var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;
      ReactDefaultBatchingStrategy.isBatchingUpdates = true;
      if (alreadyBatchingUpdates) {
        return callback(a, b, c, d, e);
      } else {
        return transaction.perform(callback, null, a, b, c, d, e);
      }
    }
  };
  module.exports = ReactDefaultBatchingStrategy;
});
System.registerDynamic('npm:fbjs@0.8.9/lib/getUnboundedScrollPosition.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @typechecks
   */

  'use strict';

  /**
   * Gets the scroll position of the supplied element or window.
   *
   * The return values are unbounded, unlike `getScrollPosition`. This means they
   * may be negative or exceed the element boundaries (which is possible using
   * inertial scrolling).
   *
   * @param {DOMWindow|DOMElement} scrollable
   * @return {object} Map with `x` and `y` keys.
   */

  var global = this || self,
      GLOBAL = global;
  function getUnboundedScrollPosition(scrollable) {
    if (scrollable === window) {
      return {
        x: window.pageXOffset || document.documentElement.scrollLeft,
        y: window.pageYOffset || document.documentElement.scrollTop
      };
    }
    return {
      x: scrollable.scrollLeft,
      y: scrollable.scrollTop
    };
  }

  module.exports = getUnboundedScrollPosition;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactEventListener.js', ['npm:object-assign@4.1.1.js', 'npm:fbjs@0.8.9/lib/EventListener.js', 'npm:fbjs@0.8.9/lib/ExecutionEnvironment.js', 'npm:react-dom@15.4.2/lib/PooledClass.js', 'npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js', 'npm:react-dom@15.4.2/lib/ReactUpdates.js', 'npm:react-dom@15.4.2/lib/getEventTarget.js', 'npm:fbjs@0.8.9/lib/getUnboundedScrollPosition.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _assign = $__require('npm:object-assign@4.1.1.js');
    var EventListener = $__require('npm:fbjs@0.8.9/lib/EventListener.js');
    var ExecutionEnvironment = $__require('npm:fbjs@0.8.9/lib/ExecutionEnvironment.js');
    var PooledClass = $__require('npm:react-dom@15.4.2/lib/PooledClass.js');
    var ReactDOMComponentTree = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js');
    var ReactUpdates = $__require('npm:react-dom@15.4.2/lib/ReactUpdates.js');
    var getEventTarget = $__require('npm:react-dom@15.4.2/lib/getEventTarget.js');
    var getUnboundedScrollPosition = $__require('npm:fbjs@0.8.9/lib/getUnboundedScrollPosition.js');
    function findParent(inst) {
      while (inst._hostParent) {
        inst = inst._hostParent;
      }
      var rootNode = ReactDOMComponentTree.getNodeFromInstance(inst);
      var container = rootNode.parentNode;
      return ReactDOMComponentTree.getClosestInstanceFromNode(container);
    }
    function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
      this.topLevelType = topLevelType;
      this.nativeEvent = nativeEvent;
      this.ancestors = [];
    }
    _assign(TopLevelCallbackBookKeeping.prototype, { destructor: function () {
        this.topLevelType = null;
        this.nativeEvent = null;
        this.ancestors.length = 0;
      } });
    PooledClass.addPoolingTo(TopLevelCallbackBookKeeping, PooledClass.twoArgumentPooler);
    function handleTopLevelImpl(bookKeeping) {
      var nativeEventTarget = getEventTarget(bookKeeping.nativeEvent);
      var targetInst = ReactDOMComponentTree.getClosestInstanceFromNode(nativeEventTarget);
      var ancestor = targetInst;
      do {
        bookKeeping.ancestors.push(ancestor);
        ancestor = ancestor && findParent(ancestor);
      } while (ancestor);
      for (var i = 0; i < bookKeeping.ancestors.length; i++) {
        targetInst = bookKeeping.ancestors[i];
        ReactEventListener._handleTopLevel(bookKeeping.topLevelType, targetInst, bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
      }
    }
    function scrollValueMonitor(cb) {
      var scrollPosition = getUnboundedScrollPosition(window);
      cb(scrollPosition);
    }
    var ReactEventListener = {
      _enabled: true,
      _handleTopLevel: null,
      WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null,
      setHandleTopLevel: function (handleTopLevel) {
        ReactEventListener._handleTopLevel = handleTopLevel;
      },
      setEnabled: function (enabled) {
        ReactEventListener._enabled = !!enabled;
      },
      isEnabled: function () {
        return ReactEventListener._enabled;
      },
      trapBubbledEvent: function (topLevelType, handlerBaseName, element) {
        if (!element) {
          return null;
        }
        return EventListener.listen(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
      },
      trapCapturedEvent: function (topLevelType, handlerBaseName, element) {
        if (!element) {
          return null;
        }
        return EventListener.capture(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
      },
      monitorScrollValue: function (refresh) {
        var callback = scrollValueMonitor.bind(null, refresh);
        EventListener.listen(window, 'scroll', callback);
      },
      dispatchEvent: function (topLevelType, nativeEvent) {
        if (!ReactEventListener._enabled) {
          return;
        }
        var bookKeeping = TopLevelCallbackBookKeeping.getPooled(topLevelType, nativeEvent);
        try {
          ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
        } finally {
          TopLevelCallbackBookKeeping.release(bookKeeping);
        }
      }
    };
    module.exports = ReactEventListener;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactInjection.js', ['npm:react-dom@15.4.2/lib/DOMProperty.js', 'npm:react-dom@15.4.2/lib/EventPluginHub.js', 'npm:react-dom@15.4.2/lib/EventPluginUtils.js', 'npm:react-dom@15.4.2/lib/ReactComponentEnvironment.js', 'npm:react-dom@15.4.2/lib/ReactEmptyComponent.js', 'npm:react-dom@15.4.2/lib/ReactBrowserEventEmitter.js', 'npm:react-dom@15.4.2/lib/ReactHostComponent.js', 'npm:react-dom@15.4.2/lib/ReactUpdates.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var DOMProperty = $__require('npm:react-dom@15.4.2/lib/DOMProperty.js');
  var EventPluginHub = $__require('npm:react-dom@15.4.2/lib/EventPluginHub.js');
  var EventPluginUtils = $__require('npm:react-dom@15.4.2/lib/EventPluginUtils.js');
  var ReactComponentEnvironment = $__require('npm:react-dom@15.4.2/lib/ReactComponentEnvironment.js');
  var ReactEmptyComponent = $__require('npm:react-dom@15.4.2/lib/ReactEmptyComponent.js');
  var ReactBrowserEventEmitter = $__require('npm:react-dom@15.4.2/lib/ReactBrowserEventEmitter.js');
  var ReactHostComponent = $__require('npm:react-dom@15.4.2/lib/ReactHostComponent.js');
  var ReactUpdates = $__require('npm:react-dom@15.4.2/lib/ReactUpdates.js');
  var ReactInjection = {
    Component: ReactComponentEnvironment.injection,
    DOMProperty: DOMProperty.injection,
    EmptyComponent: ReactEmptyComponent.injection,
    EventPluginHub: EventPluginHub.injection,
    EventPluginUtils: EventPluginUtils.injection,
    EventEmitter: ReactBrowserEventEmitter.injection,
    HostComponent: ReactHostComponent.injection,
    Updates: ReactUpdates.injection
  };
  module.exports = ReactInjection;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactReconcileTransaction.js', ['npm:object-assign@4.1.1.js', 'npm:react-dom@15.4.2/lib/CallbackQueue.js', 'npm:react-dom@15.4.2/lib/PooledClass.js', 'npm:react-dom@15.4.2/lib/ReactBrowserEventEmitter.js', 'npm:react-dom@15.4.2/lib/ReactInputSelection.js', 'npm:react-dom@15.4.2/lib/ReactInstrumentation.js', 'npm:react-dom@15.4.2/lib/Transaction.js', 'npm:react-dom@15.4.2/lib/ReactUpdateQueue.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _assign = $__require('npm:object-assign@4.1.1.js');
    var CallbackQueue = $__require('npm:react-dom@15.4.2/lib/CallbackQueue.js');
    var PooledClass = $__require('npm:react-dom@15.4.2/lib/PooledClass.js');
    var ReactBrowserEventEmitter = $__require('npm:react-dom@15.4.2/lib/ReactBrowserEventEmitter.js');
    var ReactInputSelection = $__require('npm:react-dom@15.4.2/lib/ReactInputSelection.js');
    var ReactInstrumentation = $__require('npm:react-dom@15.4.2/lib/ReactInstrumentation.js');
    var Transaction = $__require('npm:react-dom@15.4.2/lib/Transaction.js');
    var ReactUpdateQueue = $__require('npm:react-dom@15.4.2/lib/ReactUpdateQueue.js');
    var SELECTION_RESTORATION = {
      initialize: ReactInputSelection.getSelectionInformation,
      close: ReactInputSelection.restoreSelection
    };
    var EVENT_SUPPRESSION = {
      initialize: function () {
        var currentlyEnabled = ReactBrowserEventEmitter.isEnabled();
        ReactBrowserEventEmitter.setEnabled(false);
        return currentlyEnabled;
      },
      close: function (previouslyEnabled) {
        ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
      }
    };
    var ON_DOM_READY_QUEUEING = {
      initialize: function () {
        this.reactMountReady.reset();
      },
      close: function () {
        this.reactMountReady.notifyAll();
      }
    };
    var TRANSACTION_WRAPPERS = [SELECTION_RESTORATION, EVENT_SUPPRESSION, ON_DOM_READY_QUEUEING];
    if ('production' !== 'production') {
      TRANSACTION_WRAPPERS.push({
        initialize: ReactInstrumentation.debugTool.onBeginFlush,
        close: ReactInstrumentation.debugTool.onEndFlush
      });
    }
    function ReactReconcileTransaction(useCreateElement) {
      this.reinitializeTransaction();
      this.renderToStaticMarkup = false;
      this.reactMountReady = CallbackQueue.getPooled(null);
      this.useCreateElement = useCreateElement;
    }
    var Mixin = {
      getTransactionWrappers: function () {
        return TRANSACTION_WRAPPERS;
      },
      getReactMountReady: function () {
        return this.reactMountReady;
      },
      getUpdateQueue: function () {
        return ReactUpdateQueue;
      },
      checkpoint: function () {
        return this.reactMountReady.checkpoint();
      },
      rollback: function (checkpoint) {
        this.reactMountReady.rollback(checkpoint);
      },
      destructor: function () {
        CallbackQueue.release(this.reactMountReady);
        this.reactMountReady = null;
      }
    };
    _assign(ReactReconcileTransaction.prototype, Transaction, Mixin);
    PooledClass.addPoolingTo(ReactReconcileTransaction);
    module.exports = ReactReconcileTransaction;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/SVGDOMPropertyConfig.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var NS = {
    xlink: 'http://www.w3.org/1999/xlink',
    xml: 'http://www.w3.org/XML/1998/namespace'
  };

  // We use attributes for everything SVG so let's avoid some duplication and run
  // code instead.
  // The following are all specified in the HTML config already so we exclude here.
  // - class (as className)
  // - color
  // - height
  // - id
  // - lang
  // - max
  // - media
  // - method
  // - min
  // - name
  // - style
  // - target
  // - type
  // - width
  var ATTRS = {
    accentHeight: 'accent-height',
    accumulate: 0,
    additive: 0,
    alignmentBaseline: 'alignment-baseline',
    allowReorder: 'allowReorder',
    alphabetic: 0,
    amplitude: 0,
    arabicForm: 'arabic-form',
    ascent: 0,
    attributeName: 'attributeName',
    attributeType: 'attributeType',
    autoReverse: 'autoReverse',
    azimuth: 0,
    baseFrequency: 'baseFrequency',
    baseProfile: 'baseProfile',
    baselineShift: 'baseline-shift',
    bbox: 0,
    begin: 0,
    bias: 0,
    by: 0,
    calcMode: 'calcMode',
    capHeight: 'cap-height',
    clip: 0,
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    clipPathUnits: 'clipPathUnits',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    contentScriptType: 'contentScriptType',
    contentStyleType: 'contentStyleType',
    cursor: 0,
    cx: 0,
    cy: 0,
    d: 0,
    decelerate: 0,
    descent: 0,
    diffuseConstant: 'diffuseConstant',
    direction: 0,
    display: 0,
    divisor: 0,
    dominantBaseline: 'dominant-baseline',
    dur: 0,
    dx: 0,
    dy: 0,
    edgeMode: 'edgeMode',
    elevation: 0,
    enableBackground: 'enable-background',
    end: 0,
    exponent: 0,
    externalResourcesRequired: 'externalResourcesRequired',
    fill: 0,
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    filter: 0,
    filterRes: 'filterRes',
    filterUnits: 'filterUnits',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    focusable: 0,
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    format: 0,
    from: 0,
    fx: 0,
    fy: 0,
    g1: 0,
    g2: 0,
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    glyphRef: 'glyphRef',
    gradientTransform: 'gradientTransform',
    gradientUnits: 'gradientUnits',
    hanging: 0,
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    ideographic: 0,
    imageRendering: 'image-rendering',
    'in': 0,
    in2: 0,
    intercept: 0,
    k: 0,
    k1: 0,
    k2: 0,
    k3: 0,
    k4: 0,
    kernelMatrix: 'kernelMatrix',
    kernelUnitLength: 'kernelUnitLength',
    kerning: 0,
    keyPoints: 'keyPoints',
    keySplines: 'keySplines',
    keyTimes: 'keyTimes',
    lengthAdjust: 'lengthAdjust',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    limitingConeAngle: 'limitingConeAngle',
    local: 0,
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    markerHeight: 'markerHeight',
    markerUnits: 'markerUnits',
    markerWidth: 'markerWidth',
    mask: 0,
    maskContentUnits: 'maskContentUnits',
    maskUnits: 'maskUnits',
    mathematical: 0,
    mode: 0,
    numOctaves: 'numOctaves',
    offset: 0,
    opacity: 0,
    operator: 0,
    order: 0,
    orient: 0,
    orientation: 0,
    origin: 0,
    overflow: 0,
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pathLength: 'pathLength',
    patternContentUnits: 'patternContentUnits',
    patternTransform: 'patternTransform',
    patternUnits: 'patternUnits',
    pointerEvents: 'pointer-events',
    points: 0,
    pointsAtX: 'pointsAtX',
    pointsAtY: 'pointsAtY',
    pointsAtZ: 'pointsAtZ',
    preserveAlpha: 'preserveAlpha',
    preserveAspectRatio: 'preserveAspectRatio',
    primitiveUnits: 'primitiveUnits',
    r: 0,
    radius: 0,
    refX: 'refX',
    refY: 'refY',
    renderingIntent: 'rendering-intent',
    repeatCount: 'repeatCount',
    repeatDur: 'repeatDur',
    requiredExtensions: 'requiredExtensions',
    requiredFeatures: 'requiredFeatures',
    restart: 0,
    result: 0,
    rotate: 0,
    rx: 0,
    ry: 0,
    scale: 0,
    seed: 0,
    shapeRendering: 'shape-rendering',
    slope: 0,
    spacing: 0,
    specularConstant: 'specularConstant',
    specularExponent: 'specularExponent',
    speed: 0,
    spreadMethod: 'spreadMethod',
    startOffset: 'startOffset',
    stdDeviation: 'stdDeviation',
    stemh: 0,
    stemv: 0,
    stitchTiles: 'stitchTiles',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    string: 0,
    stroke: 0,
    strokeDasharray: 'stroke-dasharray',
    strokeDashoffset: 'stroke-dashoffset',
    strokeLinecap: 'stroke-linecap',
    strokeLinejoin: 'stroke-linejoin',
    strokeMiterlimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    surfaceScale: 'surfaceScale',
    systemLanguage: 'systemLanguage',
    tableValues: 'tableValues',
    targetX: 'targetX',
    targetY: 'targetY',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    textLength: 'textLength',
    to: 0,
    transform: 0,
    u1: 0,
    u2: 0,
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicode: 0,
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    values: 0,
    vectorEffect: 'vector-effect',
    version: 0,
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    viewBox: 'viewBox',
    viewTarget: 'viewTarget',
    visibility: 0,
    widths: 0,
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    x: 0,
    xHeight: 'x-height',
    x1: 0,
    x2: 0,
    xChannelSelector: 'xChannelSelector',
    xlinkActuate: 'xlink:actuate',
    xlinkArcrole: 'xlink:arcrole',
    xlinkHref: 'xlink:href',
    xlinkRole: 'xlink:role',
    xlinkShow: 'xlink:show',
    xlinkTitle: 'xlink:title',
    xlinkType: 'xlink:type',
    xmlBase: 'xml:base',
    xmlns: 0,
    xmlnsXlink: 'xmlns:xlink',
    xmlLang: 'xml:lang',
    xmlSpace: 'xml:space',
    y: 0,
    y1: 0,
    y2: 0,
    yChannelSelector: 'yChannelSelector',
    z: 0,
    zoomAndPan: 'zoomAndPan'
  };

  var SVGDOMPropertyConfig = {
    Properties: {},
    DOMAttributeNamespaces: {
      xlinkActuate: NS.xlink,
      xlinkArcrole: NS.xlink,
      xlinkHref: NS.xlink,
      xlinkRole: NS.xlink,
      xlinkShow: NS.xlink,
      xlinkTitle: NS.xlink,
      xlinkType: NS.xlink,
      xmlBase: NS.xml,
      xmlLang: NS.xml,
      xmlSpace: NS.xml
    },
    DOMAttributeNames: {}
  };

  Object.keys(ATTRS).forEach(function (key) {
    SVGDOMPropertyConfig.Properties[key] = 0;
    if (ATTRS[key]) {
      SVGDOMPropertyConfig.DOMAttributeNames[key] = ATTRS[key];
    }
  });

  module.exports = SVGDOMPropertyConfig;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/getNodeForCharacterOffset.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  /**
   * Given any node return the first leaf node without children.
   *
   * @param {DOMElement|DOMTextNode} node
   * @return {DOMElement|DOMTextNode}
   */

  var global = this || self,
      GLOBAL = global;
  function getLeafNode(node) {
    while (node && node.firstChild) {
      node = node.firstChild;
    }
    return node;
  }

  /**
   * Get the next sibling within a container. This will walk up the
   * DOM if a node's siblings have been exhausted.
   *
   * @param {DOMElement|DOMTextNode} node
   * @return {?DOMElement|DOMTextNode}
   */
  function getSiblingNode(node) {
    while (node) {
      if (node.nextSibling) {
        return node.nextSibling;
      }
      node = node.parentNode;
    }
  }

  /**
   * Get object describing the nodes which contain characters at offset.
   *
   * @param {DOMElement|DOMTextNode} root
   * @param {number} offset
   * @return {?object}
   */
  function getNodeForCharacterOffset(root, offset) {
    var node = getLeafNode(root);
    var nodeStart = 0;
    var nodeEnd = 0;

    while (node) {
      if (node.nodeType === 3) {
        nodeEnd = nodeStart + node.textContent.length;

        if (nodeStart <= offset && nodeEnd >= offset) {
          return {
            node: node,
            offset: offset - nodeStart
          };
        }

        nodeStart = nodeEnd;
      }

      node = getLeafNode(getSiblingNode(node));
    }
  }

  module.exports = getNodeForCharacterOffset;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/getTextContentAccessor.js', ['npm:fbjs@0.8.9/lib/ExecutionEnvironment.js'], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ExecutionEnvironment = $__require('npm:fbjs@0.8.9/lib/ExecutionEnvironment.js');

  var contentKey = null;

  /**
   * Gets the key used to access text content on a DOM node.
   *
   * @return {?string} Key used to access text content.
   * @internal
   */
  function getTextContentAccessor() {
    if (!contentKey && ExecutionEnvironment.canUseDOM) {
      // Prefer textContent to innerText because many browsers support both but
      // SVG <text> elements don't support innerText even when <div> does.
      contentKey = 'textContent' in document.documentElement ? 'textContent' : 'innerText';
    }
    return contentKey;
  }

  module.exports = getTextContentAccessor;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactDOMSelection.js', ['npm:fbjs@0.8.9/lib/ExecutionEnvironment.js', 'npm:react-dom@15.4.2/lib/getNodeForCharacterOffset.js', 'npm:react-dom@15.4.2/lib/getTextContentAccessor.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ExecutionEnvironment = $__require('npm:fbjs@0.8.9/lib/ExecutionEnvironment.js');
  var getNodeForCharacterOffset = $__require('npm:react-dom@15.4.2/lib/getNodeForCharacterOffset.js');
  var getTextContentAccessor = $__require('npm:react-dom@15.4.2/lib/getTextContentAccessor.js');
  function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
    return anchorNode === focusNode && anchorOffset === focusOffset;
  }
  function getIEOffsets(node) {
    var selection = document.selection;
    var selectedRange = selection.createRange();
    var selectedLength = selectedRange.text.length;
    var fromStart = selectedRange.duplicate();
    fromStart.moveToElementText(node);
    fromStart.setEndPoint('EndToStart', selectedRange);
    var startOffset = fromStart.text.length;
    var endOffset = startOffset + selectedLength;
    return {
      start: startOffset,
      end: endOffset
    };
  }
  function getModernOffsets(node) {
    var selection = window.getSelection && window.getSelection();
    if (!selection || selection.rangeCount === 0) {
      return null;
    }
    var anchorNode = selection.anchorNode;
    var anchorOffset = selection.anchorOffset;
    var focusNode = selection.focusNode;
    var focusOffset = selection.focusOffset;
    var currentRange = selection.getRangeAt(0);
    try {
      currentRange.startContainer.nodeType;
      currentRange.endContainer.nodeType;
    } catch (e) {
      return null;
    }
    var isSelectionCollapsed = isCollapsed(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);
    var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;
    var tempRange = currentRange.cloneRange();
    tempRange.selectNodeContents(node);
    tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);
    var isTempRangeCollapsed = isCollapsed(tempRange.startContainer, tempRange.startOffset, tempRange.endContainer, tempRange.endOffset);
    var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
    var end = start + rangeLength;
    var detectionRange = document.createRange();
    detectionRange.setStart(anchorNode, anchorOffset);
    detectionRange.setEnd(focusNode, focusOffset);
    var isBackward = detectionRange.collapsed;
    return {
      start: isBackward ? end : start,
      end: isBackward ? start : end
    };
  }
  function setIEOffsets(node, offsets) {
    var range = document.selection.createRange().duplicate();
    var start, end;
    if (offsets.end === undefined) {
      start = offsets.start;
      end = start;
    } else if (offsets.start > offsets.end) {
      start = offsets.end;
      end = offsets.start;
    } else {
      start = offsets.start;
      end = offsets.end;
    }
    range.moveToElementText(node);
    range.moveStart('character', start);
    range.setEndPoint('EndToStart', range);
    range.moveEnd('character', end - start);
    range.select();
  }
  function setModernOffsets(node, offsets) {
    if (!window.getSelection) {
      return;
    }
    var selection = window.getSelection();
    var length = node[getTextContentAccessor()].length;
    var start = Math.min(offsets.start, length);
    var end = offsets.end === undefined ? start : Math.min(offsets.end, length);
    if (!selection.extend && start > end) {
      var temp = end;
      end = start;
      start = temp;
    }
    var startMarker = getNodeForCharacterOffset(node, start);
    var endMarker = getNodeForCharacterOffset(node, end);
    if (startMarker && endMarker) {
      var range = document.createRange();
      range.setStart(startMarker.node, startMarker.offset);
      selection.removeAllRanges();
      if (start > end) {
        selection.addRange(range);
        selection.extend(endMarker.node, endMarker.offset);
      } else {
        range.setEnd(endMarker.node, endMarker.offset);
        selection.addRange(range);
      }
    }
  }
  var useIEOffsets = ExecutionEnvironment.canUseDOM && 'selection' in document && !('getSelection' in window);
  var ReactDOMSelection = {
    getOffsets: useIEOffsets ? getIEOffsets : getModernOffsets,
    setOffsets: useIEOffsets ? setIEOffsets : setModernOffsets
  };
  module.exports = ReactDOMSelection;
});
System.registerDynamic('npm:fbjs@0.8.9/lib/isNode.js', [], true, function ($__require, exports, module) {
  /* */
  'use strict';

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @typechecks
   */

  /**
   * @param {*} object The object to check.
   * @return {boolean} Whether or not the object is a DOM node.
   */

  var global = this || self,
      GLOBAL = global;
  function isNode(object) {
    return !!(object && (typeof Node === 'function' ? object instanceof Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
  }

  module.exports = isNode;
});
System.registerDynamic('npm:fbjs@0.8.9/lib/isTextNode.js', ['npm:fbjs@0.8.9/lib/isNode.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var isNode = $__require('npm:fbjs@0.8.9/lib/isNode.js');
  function isTextNode(object) {
    return isNode(object) && object.nodeType == 3;
  }
  module.exports = isTextNode;
});
System.registerDynamic('npm:fbjs@0.8.9/lib/containsNode.js', ['npm:fbjs@0.8.9/lib/isTextNode.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var isTextNode = $__require('npm:fbjs@0.8.9/lib/isTextNode.js');
  function containsNode(outerNode, innerNode) {
    if (!outerNode || !innerNode) {
      return false;
    } else if (outerNode === innerNode) {
      return true;
    } else if (isTextNode(outerNode)) {
      return false;
    } else if (isTextNode(innerNode)) {
      return containsNode(outerNode, innerNode.parentNode);
    } else if ('contains' in outerNode) {
      return outerNode.contains(innerNode);
    } else if (outerNode.compareDocumentPosition) {
      return !!(outerNode.compareDocumentPosition(innerNode) & 16);
    } else {
      return false;
    }
  }
  module.exports = containsNode;
});
System.registerDynamic('npm:fbjs@0.8.9/lib/focusNode.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  /**
   * @param {DOMElement} node input/textarea to focus
   */

  var global = this || self,
      GLOBAL = global;
  function focusNode(node) {
    // IE8 can throw "Can't move focus to the control because it is invisible,
    // not enabled, or of a type that does not accept the focus." for all kinds of
    // reasons that are too expensive and fragile to test.
    try {
      node.focus();
    } catch (e) {}
  }

  module.exports = focusNode;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactInputSelection.js', ['npm:react-dom@15.4.2/lib/ReactDOMSelection.js', 'npm:fbjs@0.8.9/lib/containsNode.js', 'npm:fbjs@0.8.9/lib/focusNode.js', 'npm:fbjs@0.8.9/lib/getActiveElement.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ReactDOMSelection = $__require('npm:react-dom@15.4.2/lib/ReactDOMSelection.js');
  var containsNode = $__require('npm:fbjs@0.8.9/lib/containsNode.js');
  var focusNode = $__require('npm:fbjs@0.8.9/lib/focusNode.js');
  var getActiveElement = $__require('npm:fbjs@0.8.9/lib/getActiveElement.js');
  function isInDocument(node) {
    return containsNode(document.documentElement, node);
  }
  var ReactInputSelection = {
    hasSelectionCapabilities: function (elem) {
      var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
      return nodeName && (nodeName === 'input' && elem.type === 'text' || nodeName === 'textarea' || elem.contentEditable === 'true');
    },
    getSelectionInformation: function () {
      var focusedElem = getActiveElement();
      return {
        focusedElem: focusedElem,
        selectionRange: ReactInputSelection.hasSelectionCapabilities(focusedElem) ? ReactInputSelection.getSelection(focusedElem) : null
      };
    },
    restoreSelection: function (priorSelectionInformation) {
      var curFocusedElem = getActiveElement();
      var priorFocusedElem = priorSelectionInformation.focusedElem;
      var priorSelectionRange = priorSelectionInformation.selectionRange;
      if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
        if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
          ReactInputSelection.setSelection(priorFocusedElem, priorSelectionRange);
        }
        focusNode(priorFocusedElem);
      }
    },
    getSelection: function (input) {
      var selection;
      if ('selectionStart' in input) {
        selection = {
          start: input.selectionStart,
          end: input.selectionEnd
        };
      } else if (document.selection && input.nodeName && input.nodeName.toLowerCase() === 'input') {
        var range = document.selection.createRange();
        if (range.parentElement() === input) {
          selection = {
            start: -range.moveStart('character', -input.value.length),
            end: -range.moveEnd('character', -input.value.length)
          };
        }
      } else {
        selection = ReactDOMSelection.getOffsets(input);
      }
      return selection || {
        start: 0,
        end: 0
      };
    },
    setSelection: function (input, offsets) {
      var start = offsets.start;
      var end = offsets.end;
      if (end === undefined) {
        end = start;
      }
      if ('selectionStart' in input) {
        input.selectionStart = start;
        input.selectionEnd = Math.min(end, input.value.length);
      } else if (document.selection && input.nodeName && input.nodeName.toLowerCase() === 'input') {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveStart('character', start);
        range.moveEnd('character', end - start);
        range.select();
      } else {
        ReactDOMSelection.setOffsets(input, offsets);
      }
    }
  };
  module.exports = ReactInputSelection;
});
System.registerDynamic('npm:fbjs@0.8.9/lib/getActiveElement.js', [], true, function ($__require, exports, module) {
  /* */
  'use strict';

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @typechecks
   */

  /* eslint-disable fb-www/typeof-undefined */

  /**
   * Same as document.activeElement but wraps in a try-catch block. In IE it is
   * not safe to call document.activeElement if there is nothing focused.
   *
   * The activeElement will be null only if the document or document body is not
   * yet defined.
   */

  var global = this || self,
      GLOBAL = global;
  function getActiveElement() /*?DOMElement*/{
    if (typeof document === 'undefined') {
      return null;
    }
    try {
      return document.activeElement || document.body;
    } catch (e) {
      return document.body;
    }
  }

  module.exports = getActiveElement;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/isTextInputElement.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */

  'use strict';

  /**
   * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
   */

  var global = this || self,
      GLOBAL = global;
  var supportedInputTypes = {
    'color': true,
    'date': true,
    'datetime': true,
    'datetime-local': true,
    'email': true,
    'month': true,
    'number': true,
    'password': true,
    'range': true,
    'search': true,
    'tel': true,
    'text': true,
    'time': true,
    'url': true,
    'week': true
  };

  function isTextInputElement(elem) {
    var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();

    if (nodeName === 'input') {
      return !!supportedInputTypes[elem.type];
    }

    if (nodeName === 'textarea') {
      return true;
    }

    return false;
  }

  module.exports = isTextInputElement;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/SelectEventPlugin.js', ['npm:react-dom@15.4.2/lib/EventPropagators.js', 'npm:fbjs@0.8.9/lib/ExecutionEnvironment.js', 'npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js', 'npm:react-dom@15.4.2/lib/ReactInputSelection.js', 'npm:react-dom@15.4.2/lib/SyntheticEvent.js', 'npm:fbjs@0.8.9/lib/getActiveElement.js', 'npm:react-dom@15.4.2/lib/isTextInputElement.js', 'npm:fbjs@0.8.9/lib/shallowEqual.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var EventPropagators = $__require('npm:react-dom@15.4.2/lib/EventPropagators.js');
  var ExecutionEnvironment = $__require('npm:fbjs@0.8.9/lib/ExecutionEnvironment.js');
  var ReactDOMComponentTree = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js');
  var ReactInputSelection = $__require('npm:react-dom@15.4.2/lib/ReactInputSelection.js');
  var SyntheticEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticEvent.js');
  var getActiveElement = $__require('npm:fbjs@0.8.9/lib/getActiveElement.js');
  var isTextInputElement = $__require('npm:react-dom@15.4.2/lib/isTextInputElement.js');
  var shallowEqual = $__require('npm:fbjs@0.8.9/lib/shallowEqual.js');
  var skipSelectionChangeEvent = ExecutionEnvironment.canUseDOM && 'documentMode' in document && document.documentMode <= 11;
  var eventTypes = { select: {
      phasedRegistrationNames: {
        bubbled: 'onSelect',
        captured: 'onSelectCapture'
      },
      dependencies: ['topBlur', 'topContextMenu', 'topFocus', 'topKeyDown', 'topKeyUp', 'topMouseDown', 'topMouseUp', 'topSelectionChange']
    } };
  var activeElement = null;
  var activeElementInst = null;
  var lastSelection = null;
  var mouseDown = false;
  var hasListener = false;
  function getSelection(node) {
    if ('selectionStart' in node && ReactInputSelection.hasSelectionCapabilities(node)) {
      return {
        start: node.selectionStart,
        end: node.selectionEnd
      };
    } else if (window.getSelection) {
      var selection = window.getSelection();
      return {
        anchorNode: selection.anchorNode,
        anchorOffset: selection.anchorOffset,
        focusNode: selection.focusNode,
        focusOffset: selection.focusOffset
      };
    } else if (document.selection) {
      var range = document.selection.createRange();
      return {
        parentElement: range.parentElement(),
        text: range.text,
        top: range.boundingTop,
        left: range.boundingLeft
      };
    }
  }
  function constructSelectEvent(nativeEvent, nativeEventTarget) {
    if (mouseDown || activeElement == null || activeElement !== getActiveElement()) {
      return null;
    }
    var currentSelection = getSelection(activeElement);
    if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
      lastSelection = currentSelection;
      var syntheticEvent = SyntheticEvent.getPooled(eventTypes.select, activeElementInst, nativeEvent, nativeEventTarget);
      syntheticEvent.type = 'select';
      syntheticEvent.target = activeElement;
      EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);
      return syntheticEvent;
    }
    return null;
  }
  var SelectEventPlugin = {
    eventTypes: eventTypes,
    extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
      if (!hasListener) {
        return null;
      }
      var targetNode = targetInst ? ReactDOMComponentTree.getNodeFromInstance(targetInst) : window;
      switch (topLevelType) {
        case 'topFocus':
          if (isTextInputElement(targetNode) || targetNode.contentEditable === 'true') {
            activeElement = targetNode;
            activeElementInst = targetInst;
            lastSelection = null;
          }
          break;
        case 'topBlur':
          activeElement = null;
          activeElementInst = null;
          lastSelection = null;
          break;
        case 'topMouseDown':
          mouseDown = true;
          break;
        case 'topContextMenu':
        case 'topMouseUp':
          mouseDown = false;
          return constructSelectEvent(nativeEvent, nativeEventTarget);
        case 'topSelectionChange':
          if (skipSelectionChangeEvent) {
            break;
          }
        case 'topKeyDown':
        case 'topKeyUp':
          return constructSelectEvent(nativeEvent, nativeEventTarget);
      }
      return null;
    },
    didPutListener: function (inst, registrationName, listener) {
      if (registrationName === 'onSelect') {
        hasListener = true;
      }
    }
  };
  module.exports = SelectEventPlugin;
});
System.registerDynamic('npm:fbjs@0.8.9/lib/EventListener.js', ['npm:fbjs@0.8.9/lib/emptyFunction.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var emptyFunction = $__require('npm:fbjs@0.8.9/lib/emptyFunction.js');
    var EventListener = {
      listen: function listen(target, eventType, callback) {
        if (target.addEventListener) {
          target.addEventListener(eventType, callback, false);
          return { remove: function remove() {
              target.removeEventListener(eventType, callback, false);
            } };
        } else if (target.attachEvent) {
          target.attachEvent('on' + eventType, callback);
          return { remove: function remove() {
              target.detachEvent('on' + eventType, callback);
            } };
        }
      },
      capture: function capture(target, eventType, callback) {
        if (target.addEventListener) {
          target.addEventListener(eventType, callback, true);
          return { remove: function remove() {
              target.removeEventListener(eventType, callback, true);
            } };
        } else {
          if ('production' !== 'production') {
            console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
          }
          return { remove: emptyFunction };
        }
      },
      registerDefault: function registerDefault() {}
    };
    module.exports = EventListener;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/EventPropagators.js', ['npm:react-dom@15.4.2/lib/EventPluginHub.js', 'npm:react-dom@15.4.2/lib/EventPluginUtils.js', 'npm:react-dom@15.4.2/lib/accumulateInto.js', 'npm:react-dom@15.4.2/lib/forEachAccumulated.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var EventPluginHub = $__require('npm:react-dom@15.4.2/lib/EventPluginHub.js');
    var EventPluginUtils = $__require('npm:react-dom@15.4.2/lib/EventPluginUtils.js');
    var accumulateInto = $__require('npm:react-dom@15.4.2/lib/accumulateInto.js');
    var forEachAccumulated = $__require('npm:react-dom@15.4.2/lib/forEachAccumulated.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var getListener = EventPluginHub.getListener;
    function listenerAtPhase(inst, event, propagationPhase) {
      var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
      return getListener(inst, registrationName);
    }
    function accumulateDirectionalDispatches(inst, phase, event) {
      if ('production' !== 'production') {
        'production' !== 'production' ? warning(inst, 'Dispatching inst must not be null') : void 0;
      }
      var listener = listenerAtPhase(inst, event, phase);
      if (listener) {
        event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
        event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
      }
    }
    function accumulateTwoPhaseDispatchesSingle(event) {
      if (event && event.dispatchConfig.phasedRegistrationNames) {
        EventPluginUtils.traverseTwoPhase(event._targetInst, accumulateDirectionalDispatches, event);
      }
    }
    function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
      if (event && event.dispatchConfig.phasedRegistrationNames) {
        var targetInst = event._targetInst;
        var parentInst = targetInst ? EventPluginUtils.getParentInstance(targetInst) : null;
        EventPluginUtils.traverseTwoPhase(parentInst, accumulateDirectionalDispatches, event);
      }
    }
    function accumulateDispatches(inst, ignoredDirection, event) {
      if (event && event.dispatchConfig.registrationName) {
        var registrationName = event.dispatchConfig.registrationName;
        var listener = getListener(inst, registrationName);
        if (listener) {
          event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
          event._dispatchInstances = accumulateInto(event._dispatchInstances, inst);
        }
      }
    }
    function accumulateDirectDispatchesSingle(event) {
      if (event && event.dispatchConfig.registrationName) {
        accumulateDispatches(event._targetInst, null, event);
      }
    }
    function accumulateTwoPhaseDispatches(events) {
      forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
    }
    function accumulateTwoPhaseDispatchesSkipTarget(events) {
      forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
    }
    function accumulateEnterLeaveDispatches(leave, enter, from, to) {
      EventPluginUtils.traverseEnterLeave(from, to, accumulateDispatches, leave, enter);
    }
    function accumulateDirectDispatches(events) {
      forEachAccumulated(events, accumulateDirectDispatchesSingle);
    }
    var EventPropagators = {
      accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
      accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget,
      accumulateDirectDispatches: accumulateDirectDispatches,
      accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
    };
    module.exports = EventPropagators;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/SyntheticAnimationEvent.js', ['npm:react-dom@15.4.2/lib/SyntheticEvent.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var SyntheticEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticEvent.js');
  var AnimationEventInterface = {
    animationName: null,
    elapsedTime: null,
    pseudoElement: null
  };
  function SyntheticAnimationEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticEvent.augmentClass(SyntheticAnimationEvent, AnimationEventInterface);
  module.exports = SyntheticAnimationEvent;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/SyntheticClipboardEvent.js', ['npm:react-dom@15.4.2/lib/SyntheticEvent.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var SyntheticEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticEvent.js');
  var ClipboardEventInterface = { clipboardData: function (event) {
      return 'clipboardData' in event ? event.clipboardData : window.clipboardData;
    } };
  function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticEvent.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);
  module.exports = SyntheticClipboardEvent;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/SyntheticFocusEvent.js', ['npm:react-dom@15.4.2/lib/SyntheticUIEvent.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var SyntheticUIEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticUIEvent.js');
  var FocusEventInterface = { relatedTarget: null };
  function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);
  module.exports = SyntheticFocusEvent;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/getEventKey.js', ['npm:react-dom@15.4.2/lib/getEventCharCode.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var getEventCharCode = $__require('npm:react-dom@15.4.2/lib/getEventCharCode.js');
  var normalizeKey = {
    'Esc': 'Escape',
    'Spacebar': ' ',
    'Left': 'ArrowLeft',
    'Up': 'ArrowUp',
    'Right': 'ArrowRight',
    'Down': 'ArrowDown',
    'Del': 'Delete',
    'Win': 'OS',
    'Menu': 'ContextMenu',
    'Apps': 'ContextMenu',
    'Scroll': 'ScrollLock',
    'MozPrintableKey': 'Unidentified'
  };
  var translateToKey = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  };
  function getEventKey(nativeEvent) {
    if (nativeEvent.key) {
      var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
      if (key !== 'Unidentified') {
        return key;
      }
    }
    if (nativeEvent.type === 'keypress') {
      var charCode = getEventCharCode(nativeEvent);
      return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
    }
    if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
      return translateToKey[nativeEvent.keyCode] || 'Unidentified';
    }
    return '';
  }
  module.exports = getEventKey;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/SyntheticKeyboardEvent.js', ['npm:react-dom@15.4.2/lib/SyntheticUIEvent.js', 'npm:react-dom@15.4.2/lib/getEventCharCode.js', 'npm:react-dom@15.4.2/lib/getEventKey.js', 'npm:react-dom@15.4.2/lib/getEventModifierState.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var SyntheticUIEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticUIEvent.js');
  var getEventCharCode = $__require('npm:react-dom@15.4.2/lib/getEventCharCode.js');
  var getEventKey = $__require('npm:react-dom@15.4.2/lib/getEventKey.js');
  var getEventModifierState = $__require('npm:react-dom@15.4.2/lib/getEventModifierState.js');
  var KeyboardEventInterface = {
    key: getEventKey,
    location: null,
    ctrlKey: null,
    shiftKey: null,
    altKey: null,
    metaKey: null,
    repeat: null,
    locale: null,
    getModifierState: getEventModifierState,
    charCode: function (event) {
      if (event.type === 'keypress') {
        return getEventCharCode(event);
      }
      return 0;
    },
    keyCode: function (event) {
      if (event.type === 'keydown' || event.type === 'keyup') {
        return event.keyCode;
      }
      return 0;
    },
    which: function (event) {
      if (event.type === 'keypress') {
        return getEventCharCode(event);
      }
      if (event.type === 'keydown' || event.type === 'keyup') {
        return event.keyCode;
      }
      return 0;
    }
  };
  function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);
  module.exports = SyntheticKeyboardEvent;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/SyntheticDragEvent.js', ['npm:react-dom@15.4.2/lib/SyntheticMouseEvent.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var SyntheticMouseEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticMouseEvent.js');
  var DragEventInterface = { dataTransfer: null };
  function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);
  module.exports = SyntheticDragEvent;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/SyntheticTouchEvent.js', ['npm:react-dom@15.4.2/lib/SyntheticUIEvent.js', 'npm:react-dom@15.4.2/lib/getEventModifierState.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var SyntheticUIEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticUIEvent.js');
  var getEventModifierState = $__require('npm:react-dom@15.4.2/lib/getEventModifierState.js');
  var TouchEventInterface = {
    touches: null,
    targetTouches: null,
    changedTouches: null,
    altKey: null,
    metaKey: null,
    ctrlKey: null,
    shiftKey: null,
    getModifierState: getEventModifierState
  };
  function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);
  module.exports = SyntheticTouchEvent;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/SyntheticTransitionEvent.js', ['npm:react-dom@15.4.2/lib/SyntheticEvent.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var SyntheticEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticEvent.js');
  var TransitionEventInterface = {
    propertyName: null,
    elapsedTime: null,
    pseudoElement: null
  };
  function SyntheticTransitionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticEvent.augmentClass(SyntheticTransitionEvent, TransitionEventInterface);
  module.exports = SyntheticTransitionEvent;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/SyntheticEvent.js', ['npm:object-assign@4.1.1.js', 'npm:react-dom@15.4.2/lib/PooledClass.js', 'npm:fbjs@0.8.9/lib/emptyFunction.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _assign = $__require('npm:object-assign@4.1.1.js');
    var PooledClass = $__require('npm:react-dom@15.4.2/lib/PooledClass.js');
    var emptyFunction = $__require('npm:fbjs@0.8.9/lib/emptyFunction.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var didWarnForAddedNewProperty = false;
    var isProxySupported = typeof Proxy === 'function';
    var shouldBeReleasedProperties = ['dispatchConfig', '_targetInst', 'nativeEvent', 'isDefaultPrevented', 'isPropagationStopped', '_dispatchListeners', '_dispatchInstances'];
    var EventInterface = {
      type: null,
      target: null,
      currentTarget: emptyFunction.thatReturnsNull,
      eventPhase: null,
      bubbles: null,
      cancelable: null,
      timeStamp: function (event) {
        return event.timeStamp || Date.now();
      },
      defaultPrevented: null,
      isTrusted: null
    };
    function SyntheticEvent(dispatchConfig, targetInst, nativeEvent, nativeEventTarget) {
      if ('production' !== 'production') {
        delete this.nativeEvent;
        delete this.preventDefault;
        delete this.stopPropagation;
      }
      this.dispatchConfig = dispatchConfig;
      this._targetInst = targetInst;
      this.nativeEvent = nativeEvent;
      var Interface = this.constructor.Interface;
      for (var propName in Interface) {
        if (!Interface.hasOwnProperty(propName)) {
          continue;
        }
        if ('production' !== 'production') {
          delete this[propName];
        }
        var normalize = Interface[propName];
        if (normalize) {
          this[propName] = normalize(nativeEvent);
        } else {
          if (propName === 'target') {
            this.target = nativeEventTarget;
          } else {
            this[propName] = nativeEvent[propName];
          }
        }
      }
      var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
      if (defaultPrevented) {
        this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
      } else {
        this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
      }
      this.isPropagationStopped = emptyFunction.thatReturnsFalse;
      return this;
    }
    _assign(SyntheticEvent.prototype, {
      preventDefault: function () {
        this.defaultPrevented = true;
        var event = this.nativeEvent;
        if (!event) {
          return;
        }
        if (event.preventDefault) {
          event.preventDefault();
        } else if (typeof event.returnValue !== 'unknown') {
          event.returnValue = false;
        }
        this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
      },
      stopPropagation: function () {
        var event = this.nativeEvent;
        if (!event) {
          return;
        }
        if (event.stopPropagation) {
          event.stopPropagation();
        } else if (typeof event.cancelBubble !== 'unknown') {
          event.cancelBubble = true;
        }
        this.isPropagationStopped = emptyFunction.thatReturnsTrue;
      },
      persist: function () {
        this.isPersistent = emptyFunction.thatReturnsTrue;
      },
      isPersistent: emptyFunction.thatReturnsFalse,
      destructor: function () {
        var Interface = this.constructor.Interface;
        for (var propName in Interface) {
          if ('production' !== 'production') {
            Object.defineProperty(this, propName, getPooledWarningPropertyDefinition(propName, Interface[propName]));
          } else {
            this[propName] = null;
          }
        }
        for (var i = 0; i < shouldBeReleasedProperties.length; i++) {
          this[shouldBeReleasedProperties[i]] = null;
        }
        if ('production' !== 'production') {
          Object.defineProperty(this, 'nativeEvent', getPooledWarningPropertyDefinition('nativeEvent', null));
          Object.defineProperty(this, 'preventDefault', getPooledWarningPropertyDefinition('preventDefault', emptyFunction));
          Object.defineProperty(this, 'stopPropagation', getPooledWarningPropertyDefinition('stopPropagation', emptyFunction));
        }
      }
    });
    SyntheticEvent.Interface = EventInterface;
    if ('production' !== 'production') {
      if (isProxySupported) {
        SyntheticEvent = new Proxy(SyntheticEvent, {
          construct: function (target, args) {
            return this.apply(target, Object.create(target.prototype), args);
          },
          apply: function (constructor, that, args) {
            return new Proxy(constructor.apply(that, args), { set: function (target, prop, value) {
                if (prop !== 'isPersistent' && !target.constructor.Interface.hasOwnProperty(prop) && shouldBeReleasedProperties.indexOf(prop) === -1) {
                  'production' !== 'production' ? warning(didWarnForAddedNewProperty || target.isPersistent(), 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re adding a new property in the synthetic event object. ' + 'The property is never released. See ' + 'https://fb.me/react-event-pooling for more information.') : void 0;
                  didWarnForAddedNewProperty = true;
                }
                target[prop] = value;
                return true;
              } });
          }
        });
      }
    }
    SyntheticEvent.augmentClass = function (Class, Interface) {
      var Super = this;
      var E = function () {};
      E.prototype = Super.prototype;
      var prototype = new E();
      _assign(prototype, Class.prototype);
      Class.prototype = prototype;
      Class.prototype.constructor = Class;
      Class.Interface = _assign({}, Super.Interface, Interface);
      Class.augmentClass = Super.augmentClass;
      PooledClass.addPoolingTo(Class, PooledClass.fourArgumentPooler);
    };
    PooledClass.addPoolingTo(SyntheticEvent, PooledClass.fourArgumentPooler);
    module.exports = SyntheticEvent;
    function getPooledWarningPropertyDefinition(propName, getVal) {
      var isFunction = typeof getVal === 'function';
      return {
        configurable: true,
        set: set,
        get: get
      };
      function set(val) {
        var action = isFunction ? 'setting the method' : 'setting the property';
        warn(action, 'This is effectively a no-op');
        return val;
      }
      function get() {
        var action = isFunction ? 'accessing the method' : 'accessing the property';
        var result = isFunction ? 'This is a no-op function' : 'This is set to null';
        warn(action, result);
        return getVal;
      }
      function warn(action, result) {
        var warningCondition = false;
        'production' !== 'production' ? warning(warningCondition, 'This synthetic event is reused for performance reasons. If you\'re seeing this, ' + 'you\'re %s `%s` on a released/nullified synthetic event. %s. ' + 'If you must keep the original synthetic event around, use event.persist(). ' + 'See https://fb.me/react-event-pooling for more information.', action, propName, result) : void 0;
      }
    }
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/getEventTarget.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  /**
   * Gets the target node from a native browser event by accounting for
   * inconsistencies in browser DOM APIs.
   *
   * @param {object} nativeEvent Native browser event.
   * @return {DOMEventTarget} Target node.
   */

  var global = this || self,
      GLOBAL = global;
  function getEventTarget(nativeEvent) {
    var target = nativeEvent.target || nativeEvent.srcElement || window;

    // Normalize SVG <use> element events #4963
    if (target.correspondingUseElement) {
      target = target.correspondingUseElement;
    }

    // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
    // @see http://www.quirksmode.org/js/events_properties.html
    return target.nodeType === 3 ? target.parentNode : target;
  }

  module.exports = getEventTarget;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/SyntheticUIEvent.js', ['npm:react-dom@15.4.2/lib/SyntheticEvent.js', 'npm:react-dom@15.4.2/lib/getEventTarget.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var SyntheticEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticEvent.js');
  var getEventTarget = $__require('npm:react-dom@15.4.2/lib/getEventTarget.js');
  var UIEventInterface = {
    view: function (event) {
      if (event.view) {
        return event.view;
      }
      var target = getEventTarget(event);
      if (target.window === target) {
        return target;
      }
      var doc = target.ownerDocument;
      if (doc) {
        return doc.defaultView || doc.parentWindow;
      } else {
        return window;
      }
    },
    detail: function (event) {
      return event.detail || 0;
    }
  };
  function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);
  module.exports = SyntheticUIEvent;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/getEventModifierState.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  /**
   * Translation from modifier key to the associated property in the event.
   * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
   */

  var global = this || self,
      GLOBAL = global;
  var modifierKeyToProp = {
    'Alt': 'altKey',
    'Control': 'ctrlKey',
    'Meta': 'metaKey',
    'Shift': 'shiftKey'
  };

  // IE8 does not implement getModifierState so we simply map it to the only
  // modifier keys exposed by the event itself, does not support Lock-keys.
  // Currently, all major browsers except Chrome seems to support Lock-keys.
  function modifierStateGetter(keyArg) {
    var syntheticEvent = this;
    var nativeEvent = syntheticEvent.nativeEvent;
    if (nativeEvent.getModifierState) {
      return nativeEvent.getModifierState(keyArg);
    }
    var keyProp = modifierKeyToProp[keyArg];
    return keyProp ? !!nativeEvent[keyProp] : false;
  }

  function getEventModifierState(nativeEvent) {
    return modifierStateGetter;
  }

  module.exports = getEventModifierState;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/SyntheticMouseEvent.js', ['npm:react-dom@15.4.2/lib/SyntheticUIEvent.js', 'npm:react-dom@15.4.2/lib/ViewportMetrics.js', 'npm:react-dom@15.4.2/lib/getEventModifierState.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var SyntheticUIEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticUIEvent.js');
  var ViewportMetrics = $__require('npm:react-dom@15.4.2/lib/ViewportMetrics.js');
  var getEventModifierState = $__require('npm:react-dom@15.4.2/lib/getEventModifierState.js');
  var MouseEventInterface = {
    screenX: null,
    screenY: null,
    clientX: null,
    clientY: null,
    ctrlKey: null,
    shiftKey: null,
    altKey: null,
    metaKey: null,
    getModifierState: getEventModifierState,
    button: function (event) {
      var button = event.button;
      if ('which' in event) {
        return button;
      }
      return button === 2 ? 2 : button === 4 ? 1 : 0;
    },
    buttons: null,
    relatedTarget: function (event) {
      return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement);
    },
    pageX: function (event) {
      return 'pageX' in event ? event.pageX : event.clientX + ViewportMetrics.currentScrollLeft;
    },
    pageY: function (event) {
      return 'pageY' in event ? event.pageY : event.clientY + ViewportMetrics.currentScrollTop;
    }
  };
  function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);
  module.exports = SyntheticMouseEvent;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/SyntheticWheelEvent.js', ['npm:react-dom@15.4.2/lib/SyntheticMouseEvent.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var SyntheticMouseEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticMouseEvent.js');
  var WheelEventInterface = {
    deltaX: function (event) {
      return 'deltaX' in event ? event.deltaX : 'wheelDeltaX' in event ? -event.wheelDeltaX : 0;
    },
    deltaY: function (event) {
      return 'deltaY' in event ? event.deltaY : 'wheelDeltaY' in event ? -event.wheelDeltaY : 'wheelDelta' in event ? -event.wheelDelta : 0;
    },
    deltaZ: null,
    deltaMode: null
  };
  function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
    return SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
  }
  SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);
  module.exports = SyntheticWheelEvent;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/getEventCharCode.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  /**
   * `charCode` represents the actual "character code" and is safe to use with
   * `String.fromCharCode`. As such, only keys that correspond to printable
   * characters produce a valid `charCode`, the only exception to this is Enter.
   * The Tab-key is considered non-printable and does not have a `charCode`,
   * presumably because it does not produce a tab-character in browsers.
   *
   * @param {object} nativeEvent Native browser event.
   * @return {number} Normalized `charCode` property.
   */

  var global = this || self,
      GLOBAL = global;
  function getEventCharCode(nativeEvent) {
    var charCode;
    var keyCode = nativeEvent.keyCode;

    if ('charCode' in nativeEvent) {
      charCode = nativeEvent.charCode;

      // FF does not set `charCode` for the Enter-key, check against `keyCode`.
      if (charCode === 0 && keyCode === 13) {
        charCode = 13;
      }
    } else {
      // IE8 does not implement `charCode`, but `keyCode` has the correct value.
      charCode = keyCode;
    }

    // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
    // Must not discard the (non-)printable Enter-key.
    if (charCode >= 32 || charCode === 13) {
      return charCode;
    }

    return 0;
  }

  module.exports = getEventCharCode;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/SimpleEventPlugin.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:fbjs@0.8.9/lib/EventListener.js', 'npm:react-dom@15.4.2/lib/EventPropagators.js', 'npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js', 'npm:react-dom@15.4.2/lib/SyntheticAnimationEvent.js', 'npm:react-dom@15.4.2/lib/SyntheticClipboardEvent.js', 'npm:react-dom@15.4.2/lib/SyntheticEvent.js', 'npm:react-dom@15.4.2/lib/SyntheticFocusEvent.js', 'npm:react-dom@15.4.2/lib/SyntheticKeyboardEvent.js', 'npm:react-dom@15.4.2/lib/SyntheticMouseEvent.js', 'npm:react-dom@15.4.2/lib/SyntheticDragEvent.js', 'npm:react-dom@15.4.2/lib/SyntheticTouchEvent.js', 'npm:react-dom@15.4.2/lib/SyntheticTransitionEvent.js', 'npm:react-dom@15.4.2/lib/SyntheticUIEvent.js', 'npm:react-dom@15.4.2/lib/SyntheticWheelEvent.js', 'npm:fbjs@0.8.9/lib/emptyFunction.js', 'npm:react-dom@15.4.2/lib/getEventCharCode.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    var EventListener = $__require('npm:fbjs@0.8.9/lib/EventListener.js');
    var EventPropagators = $__require('npm:react-dom@15.4.2/lib/EventPropagators.js');
    var ReactDOMComponentTree = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js');
    var SyntheticAnimationEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticAnimationEvent.js');
    var SyntheticClipboardEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticClipboardEvent.js');
    var SyntheticEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticEvent.js');
    var SyntheticFocusEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticFocusEvent.js');
    var SyntheticKeyboardEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticKeyboardEvent.js');
    var SyntheticMouseEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticMouseEvent.js');
    var SyntheticDragEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticDragEvent.js');
    var SyntheticTouchEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticTouchEvent.js');
    var SyntheticTransitionEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticTransitionEvent.js');
    var SyntheticUIEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticUIEvent.js');
    var SyntheticWheelEvent = $__require('npm:react-dom@15.4.2/lib/SyntheticWheelEvent.js');
    var emptyFunction = $__require('npm:fbjs@0.8.9/lib/emptyFunction.js');
    var getEventCharCode = $__require('npm:react-dom@15.4.2/lib/getEventCharCode.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var eventTypes = {};
    var topLevelEventsToDispatchConfig = {};
    ['abort', 'animationEnd', 'animationIteration', 'animationStart', 'blur', 'canPlay', 'canPlayThrough', 'click', 'contextMenu', 'copy', 'cut', 'doubleClick', 'drag', 'dragEnd', 'dragEnter', 'dragExit', 'dragLeave', 'dragOver', 'dragStart', 'drop', 'durationChange', 'emptied', 'encrypted', 'ended', 'error', 'focus', 'input', 'invalid', 'keyDown', 'keyPress', 'keyUp', 'load', 'loadedData', 'loadedMetadata', 'loadStart', 'mouseDown', 'mouseMove', 'mouseOut', 'mouseOver', 'mouseUp', 'paste', 'pause', 'play', 'playing', 'progress', 'rateChange', 'reset', 'scroll', 'seeked', 'seeking', 'stalled', 'submit', 'suspend', 'timeUpdate', 'touchCancel', 'touchEnd', 'touchMove', 'touchStart', 'transitionEnd', 'volumeChange', 'waiting', 'wheel'].forEach(function (event) {
      var capitalizedEvent = event[0].toUpperCase() + event.slice(1);
      var onEvent = 'on' + capitalizedEvent;
      var topEvent = 'top' + capitalizedEvent;
      var type = {
        phasedRegistrationNames: {
          bubbled: onEvent,
          captured: onEvent + 'Capture'
        },
        dependencies: [topEvent]
      };
      eventTypes[event] = type;
      topLevelEventsToDispatchConfig[topEvent] = type;
    });
    var onClickListeners = {};
    function getDictionaryKey(inst) {
      return '.' + inst._rootNodeID;
    }
    function isInteractive(tag) {
      return tag === 'button' || tag === 'input' || tag === 'select' || tag === 'textarea';
    }
    var SimpleEventPlugin = {
      eventTypes: eventTypes,
      extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
        var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
        if (!dispatchConfig) {
          return null;
        }
        var EventConstructor;
        switch (topLevelType) {
          case 'topAbort':
          case 'topCanPlay':
          case 'topCanPlayThrough':
          case 'topDurationChange':
          case 'topEmptied':
          case 'topEncrypted':
          case 'topEnded':
          case 'topError':
          case 'topInput':
          case 'topInvalid':
          case 'topLoad':
          case 'topLoadedData':
          case 'topLoadedMetadata':
          case 'topLoadStart':
          case 'topPause':
          case 'topPlay':
          case 'topPlaying':
          case 'topProgress':
          case 'topRateChange':
          case 'topReset':
          case 'topSeeked':
          case 'topSeeking':
          case 'topStalled':
          case 'topSubmit':
          case 'topSuspend':
          case 'topTimeUpdate':
          case 'topVolumeChange':
          case 'topWaiting':
            EventConstructor = SyntheticEvent;
            break;
          case 'topKeyPress':
            if (getEventCharCode(nativeEvent) === 0) {
              return null;
            }
          case 'topKeyDown':
          case 'topKeyUp':
            EventConstructor = SyntheticKeyboardEvent;
            break;
          case 'topBlur':
          case 'topFocus':
            EventConstructor = SyntheticFocusEvent;
            break;
          case 'topClick':
            if (nativeEvent.button === 2) {
              return null;
            }
          case 'topDoubleClick':
          case 'topMouseDown':
          case 'topMouseMove':
          case 'topMouseUp':
          case 'topMouseOut':
          case 'topMouseOver':
          case 'topContextMenu':
            EventConstructor = SyntheticMouseEvent;
            break;
          case 'topDrag':
          case 'topDragEnd':
          case 'topDragEnter':
          case 'topDragExit':
          case 'topDragLeave':
          case 'topDragOver':
          case 'topDragStart':
          case 'topDrop':
            EventConstructor = SyntheticDragEvent;
            break;
          case 'topTouchCancel':
          case 'topTouchEnd':
          case 'topTouchMove':
          case 'topTouchStart':
            EventConstructor = SyntheticTouchEvent;
            break;
          case 'topAnimationEnd':
          case 'topAnimationIteration':
          case 'topAnimationStart':
            EventConstructor = SyntheticAnimationEvent;
            break;
          case 'topTransitionEnd':
            EventConstructor = SyntheticTransitionEvent;
            break;
          case 'topScroll':
            EventConstructor = SyntheticUIEvent;
            break;
          case 'topWheel':
            EventConstructor = SyntheticWheelEvent;
            break;
          case 'topCopy':
          case 'topCut':
          case 'topPaste':
            EventConstructor = SyntheticClipboardEvent;
            break;
        }
        !EventConstructor ? 'production' !== 'production' ? invariant(false, 'SimpleEventPlugin: Unhandled event type, `%s`.', topLevelType) : _prodInvariant('86', topLevelType) : void 0;
        var event = EventConstructor.getPooled(dispatchConfig, targetInst, nativeEvent, nativeEventTarget);
        EventPropagators.accumulateTwoPhaseDispatches(event);
        return event;
      },
      didPutListener: function (inst, registrationName, listener) {
        if (registrationName === 'onClick' && !isInteractive(inst._tag)) {
          var key = getDictionaryKey(inst);
          var node = ReactDOMComponentTree.getNodeFromInstance(inst);
          if (!onClickListeners[key]) {
            onClickListeners[key] = EventListener.listen(node, 'click', emptyFunction);
          }
        }
      },
      willDeleteListener: function (inst, registrationName) {
        if (registrationName === 'onClick' && !isInteractive(inst._tag)) {
          var key = getDictionaryKey(inst);
          onClickListeners[key].remove();
          delete onClickListeners[key];
        }
      }
    };
    module.exports = SimpleEventPlugin;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactDefaultInjection.js', ['npm:react-dom@15.4.2/lib/ARIADOMPropertyConfig.js', 'npm:react-dom@15.4.2/lib/BeforeInputEventPlugin.js', 'npm:react-dom@15.4.2/lib/ChangeEventPlugin.js', 'npm:react-dom@15.4.2/lib/DefaultEventPluginOrder.js', 'npm:react-dom@15.4.2/lib/EnterLeaveEventPlugin.js', 'npm:react-dom@15.4.2/lib/HTMLDOMPropertyConfig.js', 'npm:react-dom@15.4.2/lib/ReactComponentBrowserEnvironment.js', 'npm:react-dom@15.4.2/lib/ReactDOMComponent.js', 'npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js', 'npm:react-dom@15.4.2/lib/ReactDOMEmptyComponent.js', 'npm:react-dom@15.4.2/lib/ReactDOMTreeTraversal.js', 'npm:react-dom@15.4.2/lib/ReactDOMTextComponent.js', 'npm:react-dom@15.4.2/lib/ReactDefaultBatchingStrategy.js', 'npm:react-dom@15.4.2/lib/ReactEventListener.js', 'npm:react-dom@15.4.2/lib/ReactInjection.js', 'npm:react-dom@15.4.2/lib/ReactReconcileTransaction.js', 'npm:react-dom@15.4.2/lib/SVGDOMPropertyConfig.js', 'npm:react-dom@15.4.2/lib/SelectEventPlugin.js', 'npm:react-dom@15.4.2/lib/SimpleEventPlugin.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ARIADOMPropertyConfig = $__require('npm:react-dom@15.4.2/lib/ARIADOMPropertyConfig.js');
  var BeforeInputEventPlugin = $__require('npm:react-dom@15.4.2/lib/BeforeInputEventPlugin.js');
  var ChangeEventPlugin = $__require('npm:react-dom@15.4.2/lib/ChangeEventPlugin.js');
  var DefaultEventPluginOrder = $__require('npm:react-dom@15.4.2/lib/DefaultEventPluginOrder.js');
  var EnterLeaveEventPlugin = $__require('npm:react-dom@15.4.2/lib/EnterLeaveEventPlugin.js');
  var HTMLDOMPropertyConfig = $__require('npm:react-dom@15.4.2/lib/HTMLDOMPropertyConfig.js');
  var ReactComponentBrowserEnvironment = $__require('npm:react-dom@15.4.2/lib/ReactComponentBrowserEnvironment.js');
  var ReactDOMComponent = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponent.js');
  var ReactDOMComponentTree = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js');
  var ReactDOMEmptyComponent = $__require('npm:react-dom@15.4.2/lib/ReactDOMEmptyComponent.js');
  var ReactDOMTreeTraversal = $__require('npm:react-dom@15.4.2/lib/ReactDOMTreeTraversal.js');
  var ReactDOMTextComponent = $__require('npm:react-dom@15.4.2/lib/ReactDOMTextComponent.js');
  var ReactDefaultBatchingStrategy = $__require('npm:react-dom@15.4.2/lib/ReactDefaultBatchingStrategy.js');
  var ReactEventListener = $__require('npm:react-dom@15.4.2/lib/ReactEventListener.js');
  var ReactInjection = $__require('npm:react-dom@15.4.2/lib/ReactInjection.js');
  var ReactReconcileTransaction = $__require('npm:react-dom@15.4.2/lib/ReactReconcileTransaction.js');
  var SVGDOMPropertyConfig = $__require('npm:react-dom@15.4.2/lib/SVGDOMPropertyConfig.js');
  var SelectEventPlugin = $__require('npm:react-dom@15.4.2/lib/SelectEventPlugin.js');
  var SimpleEventPlugin = $__require('npm:react-dom@15.4.2/lib/SimpleEventPlugin.js');
  var alreadyInjected = false;
  function inject() {
    if (alreadyInjected) {
      return;
    }
    alreadyInjected = true;
    ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener);
    ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
    ReactInjection.EventPluginUtils.injectComponentTree(ReactDOMComponentTree);
    ReactInjection.EventPluginUtils.injectTreeTraversal(ReactDOMTreeTraversal);
    ReactInjection.EventPluginHub.injectEventPluginsByName({
      SimpleEventPlugin: SimpleEventPlugin,
      EnterLeaveEventPlugin: EnterLeaveEventPlugin,
      ChangeEventPlugin: ChangeEventPlugin,
      SelectEventPlugin: SelectEventPlugin,
      BeforeInputEventPlugin: BeforeInputEventPlugin
    });
    ReactInjection.HostComponent.injectGenericComponentClass(ReactDOMComponent);
    ReactInjection.HostComponent.injectTextComponentClass(ReactDOMTextComponent);
    ReactInjection.DOMProperty.injectDOMPropertyConfig(ARIADOMPropertyConfig);
    ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
    ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);
    ReactInjection.EmptyComponent.injectEmptyComponentFactory(function (instantiate) {
      return new ReactDOMEmptyComponent(instantiate);
    });
    ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);
    ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);
    ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);
  }
  module.exports = { inject: inject };
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactVersion.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  module.exports = '15.4.2';
});
System.registerDynamic('npm:react-dom@15.4.2/lib/findDOMNode.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:react@15.4.2/lib/ReactCurrentOwner.js', 'npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js', 'npm:react-dom@15.4.2/lib/ReactInstanceMap.js', 'npm:react-dom@15.4.2/lib/getHostComponentFromComposite.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    var ReactCurrentOwner = $__require('npm:react@15.4.2/lib/ReactCurrentOwner.js');
    var ReactDOMComponentTree = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js');
    var ReactInstanceMap = $__require('npm:react-dom@15.4.2/lib/ReactInstanceMap.js');
    var getHostComponentFromComposite = $__require('npm:react-dom@15.4.2/lib/getHostComponentFromComposite.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    function findDOMNode(componentOrElement) {
      if ('production' !== 'production') {
        var owner = ReactCurrentOwner.current;
        if (owner !== null) {
          'production' !== 'production' ? warning(owner._warnedAboutRefsInRender, '%s is accessing findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : void 0;
          owner._warnedAboutRefsInRender = true;
        }
      }
      if (componentOrElement == null) {
        return null;
      }
      if (componentOrElement.nodeType === 1) {
        return componentOrElement;
      }
      var inst = ReactInstanceMap.get(componentOrElement);
      if (inst) {
        inst = getHostComponentFromComposite(inst);
        return inst ? ReactDOMComponentTree.getNodeFromInstance(inst) : null;
      }
      if (typeof componentOrElement.render === 'function') {
        !false ? 'production' !== 'production' ? invariant(false, 'findDOMNode was called on an unmounted component.') : _prodInvariant('44') : void 0;
      } else {
        !false ? 'production' !== 'production' ? invariant(false, 'Element appears to be neither ReactComponent nor DOMNode (keys: %s)', Object.keys(componentOrElement)) : _prodInvariant('45', Object.keys(componentOrElement)) : void 0;
      }
    }
    module.exports = findDOMNode;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/getHostComponentFromComposite.js', ['npm:react-dom@15.4.2/lib/ReactNodeTypes.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ReactNodeTypes = $__require('npm:react-dom@15.4.2/lib/ReactNodeTypes.js');
  function getHostComponentFromComposite(inst) {
    var type;
    while ((type = inst._renderedNodeType) === ReactNodeTypes.COMPOSITE) {
      inst = inst._renderedComponent;
    }
    if (type === ReactNodeTypes.HOST) {
      return inst._renderedComponent;
    } else if (type === ReactNodeTypes.EMPTY) {
      return null;
    }
  }
  module.exports = getHostComponentFromComposite;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/escapeTextContentForBrowser.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2016-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * Based on the escape-html library, which is used under the MIT License below:
   *
   * Copyright (c) 2012-2013 TJ Holowaychuk
   * Copyright (c) 2015 Andreas Lubbe
   * Copyright (c) 2015 Tiancheng "Timothy" Gu
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * 'Software'), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
   * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
   * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
   * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
   * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   *
   */

  'use strict';

  // code copied and modified from escape-html
  /**
   * Module variables.
   * @private
   */

  var global = this || self,
      GLOBAL = global;
  var matchHtmlRegExp = /["'&<>]/;

  /**
   * Escape special characters in the given string of html.
   *
   * @param  {string} string The string to escape for inserting into HTML
   * @return {string}
   * @public
   */

  function escapeHtml(string) {
    var str = '' + string;
    var match = matchHtmlRegExp.exec(str);

    if (!match) {
      return str;
    }

    var escape;
    var html = '';
    var index = 0;
    var lastIndex = 0;

    for (index = match.index; index < str.length; index++) {
      switch (str.charCodeAt(index)) {
        case 34:
          // "
          escape = '&quot;';
          break;
        case 38:
          // &
          escape = '&amp;';
          break;
        case 39:
          // '
          escape = '&#x27;'; // modified from escape-html; used to be '&#39'
          break;
        case 60:
          // <
          escape = '&lt;';
          break;
        case 62:
          // >
          escape = '&gt;';
          break;
        default:
          continue;
      }

      if (lastIndex !== index) {
        html += str.substring(lastIndex, index);
      }

      lastIndex = index + 1;
      html += escape;
    }

    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
  }
  // end code copied and modified from escape-html


  /**
   * Escapes text to prevent scripting attacks.
   *
   * @param {*} text Text value to escape.
   * @return {string} An escaped string.
   */
  function escapeTextContentForBrowser(text) {
    if (typeof text === 'boolean' || typeof text === 'number') {
      // this shortcircuit helps perf for types that we know will never have
      // special characters, especially given that this function is used often
      // for numeric dom ids.
      return '' + text;
    }
    return escapeHtml(text);
  }

  module.exports = escapeTextContentForBrowser;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/setTextContent.js', ['npm:fbjs@0.8.9/lib/ExecutionEnvironment.js', 'npm:react-dom@15.4.2/lib/escapeTextContentForBrowser.js', 'npm:react-dom@15.4.2/lib/setInnerHTML.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ExecutionEnvironment = $__require('npm:fbjs@0.8.9/lib/ExecutionEnvironment.js');
  var escapeTextContentForBrowser = $__require('npm:react-dom@15.4.2/lib/escapeTextContentForBrowser.js');
  var setInnerHTML = $__require('npm:react-dom@15.4.2/lib/setInnerHTML.js');
  var setTextContent = function (node, text) {
    if (text) {
      var firstChild = node.firstChild;
      if (firstChild && firstChild === node.lastChild && firstChild.nodeType === 3) {
        firstChild.nodeValue = text;
        return;
      }
    }
    node.textContent = text;
  };
  if (ExecutionEnvironment.canUseDOM) {
    if (!('textContent' in document.documentElement)) {
      setTextContent = function (node, text) {
        if (node.nodeType === 3) {
          node.nodeValue = text;
          return;
        }
        setInnerHTML(node, escapeTextContentForBrowser(text));
      };
    }
  }
  module.exports = setTextContent;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/DOMLazyTree.js', ['npm:react-dom@15.4.2/lib/DOMNamespaces.js', 'npm:react-dom@15.4.2/lib/setInnerHTML.js', 'npm:react-dom@15.4.2/lib/createMicrosoftUnsafeLocalFunction.js', 'npm:react-dom@15.4.2/lib/setTextContent.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var DOMNamespaces = $__require('npm:react-dom@15.4.2/lib/DOMNamespaces.js');
  var setInnerHTML = $__require('npm:react-dom@15.4.2/lib/setInnerHTML.js');
  var createMicrosoftUnsafeLocalFunction = $__require('npm:react-dom@15.4.2/lib/createMicrosoftUnsafeLocalFunction.js');
  var setTextContent = $__require('npm:react-dom@15.4.2/lib/setTextContent.js');
  var ELEMENT_NODE_TYPE = 1;
  var DOCUMENT_FRAGMENT_NODE_TYPE = 11;
  var enableLazy = typeof document !== 'undefined' && typeof document.documentMode === 'number' || typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && /\bEdge\/\d/.test(navigator.userAgent);
  function insertTreeChildren(tree) {
    if (!enableLazy) {
      return;
    }
    var node = tree.node;
    var children = tree.children;
    if (children.length) {
      for (var i = 0; i < children.length; i++) {
        insertTreeBefore(node, children[i], null);
      }
    } else if (tree.html != null) {
      setInnerHTML(node, tree.html);
    } else if (tree.text != null) {
      setTextContent(node, tree.text);
    }
  }
  var insertTreeBefore = createMicrosoftUnsafeLocalFunction(function (parentNode, tree, referenceNode) {
    if (tree.node.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE || tree.node.nodeType === ELEMENT_NODE_TYPE && tree.node.nodeName.toLowerCase() === 'object' && (tree.node.namespaceURI == null || tree.node.namespaceURI === DOMNamespaces.html)) {
      insertTreeChildren(tree);
      parentNode.insertBefore(tree.node, referenceNode);
    } else {
      parentNode.insertBefore(tree.node, referenceNode);
      insertTreeChildren(tree);
    }
  });
  function replaceChildWithTree(oldNode, newTree) {
    oldNode.parentNode.replaceChild(newTree.node, oldNode);
    insertTreeChildren(newTree);
  }
  function queueChild(parentTree, childTree) {
    if (enableLazy) {
      parentTree.children.push(childTree);
    } else {
      parentTree.node.appendChild(childTree.node);
    }
  }
  function queueHTML(tree, html) {
    if (enableLazy) {
      tree.html = html;
    } else {
      setInnerHTML(tree.node, html);
    }
  }
  function queueText(tree, text) {
    if (enableLazy) {
      tree.text = text;
    } else {
      setTextContent(tree.node, text);
    }
  }
  function toString() {
    return this.node.nodeName;
  }
  function DOMLazyTree(node) {
    return {
      node: node,
      children: [],
      html: null,
      text: null,
      toString: toString
    };
  }
  DOMLazyTree.insertTreeBefore = insertTreeBefore;
  DOMLazyTree.replaceChildWithTree = replaceChildWithTree;
  DOMLazyTree.queueChild = queueChild;
  DOMLazyTree.queueHTML = queueHTML;
  DOMLazyTree.queueText = queueText;
  module.exports = DOMLazyTree;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/EventPluginUtils.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:react-dom@15.4.2/lib/ReactErrorUtils.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    var ReactErrorUtils = $__require('npm:react-dom@15.4.2/lib/ReactErrorUtils.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var ComponentTree;
    var TreeTraversal;
    var injection = {
      injectComponentTree: function (Injected) {
        ComponentTree = Injected;
        if ('production' !== 'production') {
          'production' !== 'production' ? warning(Injected && Injected.getNodeFromInstance && Injected.getInstanceFromNode, 'EventPluginUtils.injection.injectComponentTree(...): Injected ' + 'module is missing getNodeFromInstance or getInstanceFromNode.') : void 0;
        }
      },
      injectTreeTraversal: function (Injected) {
        TreeTraversal = Injected;
        if ('production' !== 'production') {
          'production' !== 'production' ? warning(Injected && Injected.isAncestor && Injected.getLowestCommonAncestor, 'EventPluginUtils.injection.injectTreeTraversal(...): Injected ' + 'module is missing isAncestor or getLowestCommonAncestor.') : void 0;
        }
      }
    };
    function isEndish(topLevelType) {
      return topLevelType === 'topMouseUp' || topLevelType === 'topTouchEnd' || topLevelType === 'topTouchCancel';
    }
    function isMoveish(topLevelType) {
      return topLevelType === 'topMouseMove' || topLevelType === 'topTouchMove';
    }
    function isStartish(topLevelType) {
      return topLevelType === 'topMouseDown' || topLevelType === 'topTouchStart';
    }
    var validateEventDispatches;
    if ('production' !== 'production') {
      validateEventDispatches = function (event) {
        var dispatchListeners = event._dispatchListeners;
        var dispatchInstances = event._dispatchInstances;
        var listenersIsArr = Array.isArray(dispatchListeners);
        var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;
        var instancesIsArr = Array.isArray(dispatchInstances);
        var instancesLen = instancesIsArr ? dispatchInstances.length : dispatchInstances ? 1 : 0;
        'production' !== 'production' ? warning(instancesIsArr === listenersIsArr && instancesLen === listenersLen, 'EventPluginUtils: Invalid `event`.') : void 0;
      };
    }
    function executeDispatch(event, simulated, listener, inst) {
      var type = event.type || 'unknown-event';
      event.currentTarget = EventPluginUtils.getNodeFromInstance(inst);
      if (simulated) {
        ReactErrorUtils.invokeGuardedCallbackWithCatch(type, listener, event);
      } else {
        ReactErrorUtils.invokeGuardedCallback(type, listener, event);
      }
      event.currentTarget = null;
    }
    function executeDispatchesInOrder(event, simulated) {
      var dispatchListeners = event._dispatchListeners;
      var dispatchInstances = event._dispatchInstances;
      if ('production' !== 'production') {
        validateEventDispatches(event);
      }
      if (Array.isArray(dispatchListeners)) {
        for (var i = 0; i < dispatchListeners.length; i++) {
          if (event.isPropagationStopped()) {
            break;
          }
          executeDispatch(event, simulated, dispatchListeners[i], dispatchInstances[i]);
        }
      } else if (dispatchListeners) {
        executeDispatch(event, simulated, dispatchListeners, dispatchInstances);
      }
      event._dispatchListeners = null;
      event._dispatchInstances = null;
    }
    function executeDispatchesInOrderStopAtTrueImpl(event) {
      var dispatchListeners = event._dispatchListeners;
      var dispatchInstances = event._dispatchInstances;
      if ('production' !== 'production') {
        validateEventDispatches(event);
      }
      if (Array.isArray(dispatchListeners)) {
        for (var i = 0; i < dispatchListeners.length; i++) {
          if (event.isPropagationStopped()) {
            break;
          }
          if (dispatchListeners[i](event, dispatchInstances[i])) {
            return dispatchInstances[i];
          }
        }
      } else if (dispatchListeners) {
        if (dispatchListeners(event, dispatchInstances)) {
          return dispatchInstances;
        }
      }
      return null;
    }
    function executeDispatchesInOrderStopAtTrue(event) {
      var ret = executeDispatchesInOrderStopAtTrueImpl(event);
      event._dispatchInstances = null;
      event._dispatchListeners = null;
      return ret;
    }
    function executeDirectDispatch(event) {
      if ('production' !== 'production') {
        validateEventDispatches(event);
      }
      var dispatchListener = event._dispatchListeners;
      var dispatchInstance = event._dispatchInstances;
      !!Array.isArray(dispatchListener) ? 'production' !== 'production' ? invariant(false, 'executeDirectDispatch(...): Invalid `event`.') : _prodInvariant('103') : void 0;
      event.currentTarget = dispatchListener ? EventPluginUtils.getNodeFromInstance(dispatchInstance) : null;
      var res = dispatchListener ? dispatchListener(event) : null;
      event.currentTarget = null;
      event._dispatchListeners = null;
      event._dispatchInstances = null;
      return res;
    }
    function hasDispatches(event) {
      return !!event._dispatchListeners;
    }
    var EventPluginUtils = {
      isEndish: isEndish,
      isMoveish: isMoveish,
      isStartish: isStartish,
      executeDirectDispatch: executeDirectDispatch,
      executeDispatchesInOrder: executeDispatchesInOrder,
      executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
      hasDispatches: hasDispatches,
      getInstanceFromNode: function (node) {
        return ComponentTree.getInstanceFromNode(node);
      },
      getNodeFromInstance: function (node) {
        return ComponentTree.getNodeFromInstance(node);
      },
      isAncestor: function (a, b) {
        return TreeTraversal.isAncestor(a, b);
      },
      getLowestCommonAncestor: function (a, b) {
        return TreeTraversal.getLowestCommonAncestor(a, b);
      },
      getParentInstance: function (inst) {
        return TreeTraversal.getParentInstance(inst);
      },
      traverseTwoPhase: function (target, fn, arg) {
        return TreeTraversal.traverseTwoPhase(target, fn, arg);
      },
      traverseEnterLeave: function (from, to, fn, argFrom, argTo) {
        return TreeTraversal.traverseEnterLeave(from, to, fn, argFrom, argTo);
      },
      injection: injection
    };
    module.exports = EventPluginUtils;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/accumulateInto.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    function accumulateInto(current, next) {
      !(next != null) ? 'production' !== 'production' ? invariant(false, 'accumulateInto(...): Accumulated items must not be null or undefined.') : _prodInvariant('30') : void 0;
      if (current == null) {
        return next;
      }
      if (Array.isArray(current)) {
        if (Array.isArray(next)) {
          current.push.apply(current, next);
          return current;
        }
        current.push(next);
        return current;
      }
      if (Array.isArray(next)) {
        return [current].concat(next);
      }
      return [current, next];
    }
    module.exports = accumulateInto;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/forEachAccumulated.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */

  'use strict';

  /**
   * @param {array} arr an "accumulation" of items which is either an Array or
   * a single item. Useful when paired with the `accumulate` module. This is a
   * simple utility that allows us to reason about a collection of items, but
   * handling the case when there is exactly one item (and we do not need to
   * allocate an array).
   */

  var global = this || self,
      GLOBAL = global;
  function forEachAccumulated(arr, cb, scope) {
    if (Array.isArray(arr)) {
      arr.forEach(cb, scope);
    } else if (arr) {
      cb.call(scope, arr);
    }
  }

  module.exports = forEachAccumulated;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/EventPluginHub.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:react-dom@15.4.2/lib/EventPluginRegistry.js', 'npm:react-dom@15.4.2/lib/EventPluginUtils.js', 'npm:react-dom@15.4.2/lib/ReactErrorUtils.js', 'npm:react-dom@15.4.2/lib/accumulateInto.js', 'npm:react-dom@15.4.2/lib/forEachAccumulated.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    var EventPluginRegistry = $__require('npm:react-dom@15.4.2/lib/EventPluginRegistry.js');
    var EventPluginUtils = $__require('npm:react-dom@15.4.2/lib/EventPluginUtils.js');
    var ReactErrorUtils = $__require('npm:react-dom@15.4.2/lib/ReactErrorUtils.js');
    var accumulateInto = $__require('npm:react-dom@15.4.2/lib/accumulateInto.js');
    var forEachAccumulated = $__require('npm:react-dom@15.4.2/lib/forEachAccumulated.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var listenerBank = {};
    var eventQueue = null;
    var executeDispatchesAndRelease = function (event, simulated) {
      if (event) {
        EventPluginUtils.executeDispatchesInOrder(event, simulated);
        if (!event.isPersistent()) {
          event.constructor.release(event);
        }
      }
    };
    var executeDispatchesAndReleaseSimulated = function (e) {
      return executeDispatchesAndRelease(e, true);
    };
    var executeDispatchesAndReleaseTopLevel = function (e) {
      return executeDispatchesAndRelease(e, false);
    };
    var getDictionaryKey = function (inst) {
      return '.' + inst._rootNodeID;
    };
    function isInteractive(tag) {
      return tag === 'button' || tag === 'input' || tag === 'select' || tag === 'textarea';
    }
    function shouldPreventMouseEvent(name, type, props) {
      switch (name) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
          return !!(props.disabled && isInteractive(type));
        default:
          return false;
      }
    }
    var EventPluginHub = {
      injection: {
        injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,
        injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName
      },
      putListener: function (inst, registrationName, listener) {
        !(typeof listener === 'function') ? 'production' !== 'production' ? invariant(false, 'Expected %s listener to be a function, instead got type %s', registrationName, typeof listener) : _prodInvariant('94', registrationName, typeof listener) : void 0;
        var key = getDictionaryKey(inst);
        var bankForRegistrationName = listenerBank[registrationName] || (listenerBank[registrationName] = {});
        bankForRegistrationName[key] = listener;
        var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
        if (PluginModule && PluginModule.didPutListener) {
          PluginModule.didPutListener(inst, registrationName, listener);
        }
      },
      getListener: function (inst, registrationName) {
        var bankForRegistrationName = listenerBank[registrationName];
        if (shouldPreventMouseEvent(registrationName, inst._currentElement.type, inst._currentElement.props)) {
          return null;
        }
        var key = getDictionaryKey(inst);
        return bankForRegistrationName && bankForRegistrationName[key];
      },
      deleteListener: function (inst, registrationName) {
        var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
        if (PluginModule && PluginModule.willDeleteListener) {
          PluginModule.willDeleteListener(inst, registrationName);
        }
        var bankForRegistrationName = listenerBank[registrationName];
        if (bankForRegistrationName) {
          var key = getDictionaryKey(inst);
          delete bankForRegistrationName[key];
        }
      },
      deleteAllListeners: function (inst) {
        var key = getDictionaryKey(inst);
        for (var registrationName in listenerBank) {
          if (!listenerBank.hasOwnProperty(registrationName)) {
            continue;
          }
          if (!listenerBank[registrationName][key]) {
            continue;
          }
          var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
          if (PluginModule && PluginModule.willDeleteListener) {
            PluginModule.willDeleteListener(inst, registrationName);
          }
          delete listenerBank[registrationName][key];
        }
      },
      extractEvents: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
        var events;
        var plugins = EventPluginRegistry.plugins;
        for (var i = 0; i < plugins.length; i++) {
          var possiblePlugin = plugins[i];
          if (possiblePlugin) {
            var extractedEvents = possiblePlugin.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
            if (extractedEvents) {
              events = accumulateInto(events, extractedEvents);
            }
          }
        }
        return events;
      },
      enqueueEvents: function (events) {
        if (events) {
          eventQueue = accumulateInto(eventQueue, events);
        }
      },
      processEventQueue: function (simulated) {
        var processingEventQueue = eventQueue;
        eventQueue = null;
        if (simulated) {
          forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseSimulated);
        } else {
          forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseTopLevel);
        }
        !!eventQueue ? 'production' !== 'production' ? invariant(false, 'processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.') : _prodInvariant('95') : void 0;
        ReactErrorUtils.rethrowCaughtError();
      },
      __purge: function () {
        listenerBank = {};
      },
      __getListenerBank: function () {
        return listenerBank;
      }
    };
    module.exports = EventPluginHub;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactEventEmitterMixin.js', ['npm:react-dom@15.4.2/lib/EventPluginHub.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var EventPluginHub = $__require('npm:react-dom@15.4.2/lib/EventPluginHub.js');
  function runEventQueueInBatch(events) {
    EventPluginHub.enqueueEvents(events);
    EventPluginHub.processEventQueue(false);
  }
  var ReactEventEmitterMixin = { handleTopLevel: function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
      var events = EventPluginHub.extractEvents(topLevelType, targetInst, nativeEvent, nativeEventTarget);
      runEventQueueInBatch(events);
    } };
  module.exports = ReactEventEmitterMixin;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ViewportMetrics.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ViewportMetrics = {

    currentScrollLeft: 0,

    currentScrollTop: 0,

    refreshScrollValues: function (scrollPosition) {
      ViewportMetrics.currentScrollLeft = scrollPosition.x;
      ViewportMetrics.currentScrollTop = scrollPosition.y;
    }

  };

  module.exports = ViewportMetrics;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/getVendorPrefixedEventName.js', ['npm:fbjs@0.8.9/lib/ExecutionEnvironment.js'], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ExecutionEnvironment = $__require('npm:fbjs@0.8.9/lib/ExecutionEnvironment.js');

  /**
   * Generate a mapping of standard vendor prefixes using the defined style property and event name.
   *
   * @param {string} styleProp
   * @param {string} eventName
   * @returns {object}
   */
  function makePrefixMap(styleProp, eventName) {
    var prefixes = {};

    prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
    prefixes['Webkit' + styleProp] = 'webkit' + eventName;
    prefixes['Moz' + styleProp] = 'moz' + eventName;
    prefixes['ms' + styleProp] = 'MS' + eventName;
    prefixes['O' + styleProp] = 'o' + eventName.toLowerCase();

    return prefixes;
  }

  /**
   * A list of event names to a configurable list of vendor prefixes.
   */
  var vendorPrefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    animationiteration: makePrefixMap('Animation', 'AnimationIteration'),
    animationstart: makePrefixMap('Animation', 'AnimationStart'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };

  /**
   * Event names that have already been detected and prefixed (if applicable).
   */
  var prefixedEventNames = {};

  /**
   * Element to check for prefixes on.
   */
  var style = {};

  /**
   * Bootstrap if a DOM exists.
   */
  if (ExecutionEnvironment.canUseDOM) {
    style = document.createElement('div').style;

    // On some platforms, in particular some releases of Android 4.x,
    // the un-prefixed "animation" and "transition" properties are defined on the
    // style object but the events that fire will still be prefixed, so we need
    // to check if the un-prefixed events are usable, and if not remove them from the map.
    if (!('AnimationEvent' in window)) {
      delete vendorPrefixes.animationend.animation;
      delete vendorPrefixes.animationiteration.animation;
      delete vendorPrefixes.animationstart.animation;
    }

    // Same as above
    if (!('TransitionEvent' in window)) {
      delete vendorPrefixes.transitionend.transition;
    }
  }

  /**
   * Attempts to determine the correct vendor prefixed event name.
   *
   * @param {string} eventName
   * @returns {string}
   */
  function getVendorPrefixedEventName(eventName) {
    if (prefixedEventNames[eventName]) {
      return prefixedEventNames[eventName];
    } else if (!vendorPrefixes[eventName]) {
      return eventName;
    }

    var prefixMap = vendorPrefixes[eventName];

    for (var styleProp in prefixMap) {
      if (prefixMap.hasOwnProperty(styleProp) && styleProp in style) {
        return prefixedEventNames[eventName] = prefixMap[styleProp];
      }
    }

    return '';
  }

  module.exports = getVendorPrefixedEventName;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/isEventSupported.js', ['npm:fbjs@0.8.9/lib/ExecutionEnvironment.js'], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ExecutionEnvironment = $__require('npm:fbjs@0.8.9/lib/ExecutionEnvironment.js');

  var useHasFeature;
  if (ExecutionEnvironment.canUseDOM) {
    useHasFeature = document.implementation && document.implementation.hasFeature &&
    // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    document.implementation.hasFeature('', '') !== true;
  }

  /**
   * Checks if an event is supported in the current execution environment.
   *
   * NOTE: This will not work correctly for non-generic events such as `change`,
   * `reset`, `load`, `error`, and `select`.
   *
   * Borrows from Modernizr.
   *
   * @param {string} eventNameSuffix Event name, e.g. "click".
   * @param {?boolean} capture Check if the capture phase is supported.
   * @return {boolean} True if the event is supported.
   * @internal
   * @license Modernizr 3.0.0pre (Custom Build) | MIT
   */
  function isEventSupported(eventNameSuffix, capture) {
    if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
      return false;
    }

    var eventName = 'on' + eventNameSuffix;
    var isSupported = eventName in document;

    if (!isSupported) {
      var element = document.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }

    if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
      // This is the only way to test support for the `wheel` event in IE9+.
      isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
    }

    return isSupported;
  }

  module.exports = isEventSupported;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactBrowserEventEmitter.js', ['npm:object-assign@4.1.1.js', 'npm:react-dom@15.4.2/lib/EventPluginRegistry.js', 'npm:react-dom@15.4.2/lib/ReactEventEmitterMixin.js', 'npm:react-dom@15.4.2/lib/ViewportMetrics.js', 'npm:react-dom@15.4.2/lib/getVendorPrefixedEventName.js', 'npm:react-dom@15.4.2/lib/isEventSupported.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _assign = $__require('npm:object-assign@4.1.1.js');
    var EventPluginRegistry = $__require('npm:react-dom@15.4.2/lib/EventPluginRegistry.js');
    var ReactEventEmitterMixin = $__require('npm:react-dom@15.4.2/lib/ReactEventEmitterMixin.js');
    var ViewportMetrics = $__require('npm:react-dom@15.4.2/lib/ViewportMetrics.js');
    var getVendorPrefixedEventName = $__require('npm:react-dom@15.4.2/lib/getVendorPrefixedEventName.js');
    var isEventSupported = $__require('npm:react-dom@15.4.2/lib/isEventSupported.js');
    var hasEventPageXY;
    var alreadyListeningTo = {};
    var isMonitoringScrollValue = false;
    var reactTopListenersCounter = 0;
    var topEventMapping = {
      topAbort: 'abort',
      topAnimationEnd: getVendorPrefixedEventName('animationend') || 'animationend',
      topAnimationIteration: getVendorPrefixedEventName('animationiteration') || 'animationiteration',
      topAnimationStart: getVendorPrefixedEventName('animationstart') || 'animationstart',
      topBlur: 'blur',
      topCanPlay: 'canplay',
      topCanPlayThrough: 'canplaythrough',
      topChange: 'change',
      topClick: 'click',
      topCompositionEnd: 'compositionend',
      topCompositionStart: 'compositionstart',
      topCompositionUpdate: 'compositionupdate',
      topContextMenu: 'contextmenu',
      topCopy: 'copy',
      topCut: 'cut',
      topDoubleClick: 'dblclick',
      topDrag: 'drag',
      topDragEnd: 'dragend',
      topDragEnter: 'dragenter',
      topDragExit: 'dragexit',
      topDragLeave: 'dragleave',
      topDragOver: 'dragover',
      topDragStart: 'dragstart',
      topDrop: 'drop',
      topDurationChange: 'durationchange',
      topEmptied: 'emptied',
      topEncrypted: 'encrypted',
      topEnded: 'ended',
      topError: 'error',
      topFocus: 'focus',
      topInput: 'input',
      topKeyDown: 'keydown',
      topKeyPress: 'keypress',
      topKeyUp: 'keyup',
      topLoadedData: 'loadeddata',
      topLoadedMetadata: 'loadedmetadata',
      topLoadStart: 'loadstart',
      topMouseDown: 'mousedown',
      topMouseMove: 'mousemove',
      topMouseOut: 'mouseout',
      topMouseOver: 'mouseover',
      topMouseUp: 'mouseup',
      topPaste: 'paste',
      topPause: 'pause',
      topPlay: 'play',
      topPlaying: 'playing',
      topProgress: 'progress',
      topRateChange: 'ratechange',
      topScroll: 'scroll',
      topSeeked: 'seeked',
      topSeeking: 'seeking',
      topSelectionChange: 'selectionchange',
      topStalled: 'stalled',
      topSuspend: 'suspend',
      topTextInput: 'textInput',
      topTimeUpdate: 'timeupdate',
      topTouchCancel: 'touchcancel',
      topTouchEnd: 'touchend',
      topTouchMove: 'touchmove',
      topTouchStart: 'touchstart',
      topTransitionEnd: getVendorPrefixedEventName('transitionend') || 'transitionend',
      topVolumeChange: 'volumechange',
      topWaiting: 'waiting',
      topWheel: 'wheel'
    };
    var topListenersIDKey = '_reactListenersID' + String(Math.random()).slice(2);
    function getListeningForDocument(mountAt) {
      if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
        mountAt[topListenersIDKey] = reactTopListenersCounter++;
        alreadyListeningTo[mountAt[topListenersIDKey]] = {};
      }
      return alreadyListeningTo[mountAt[topListenersIDKey]];
    }
    var ReactBrowserEventEmitter = _assign({}, ReactEventEmitterMixin, {
      ReactEventListener: null,
      injection: { injectReactEventListener: function (ReactEventListener) {
          ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);
          ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
        } },
      setEnabled: function (enabled) {
        if (ReactBrowserEventEmitter.ReactEventListener) {
          ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
        }
      },
      isEnabled: function () {
        return !!(ReactBrowserEventEmitter.ReactEventListener && ReactBrowserEventEmitter.ReactEventListener.isEnabled());
      },
      listenTo: function (registrationName, contentDocumentHandle) {
        var mountAt = contentDocumentHandle;
        var isListening = getListeningForDocument(mountAt);
        var dependencies = EventPluginRegistry.registrationNameDependencies[registrationName];
        for (var i = 0; i < dependencies.length; i++) {
          var dependency = dependencies[i];
          if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
            if (dependency === 'topWheel') {
              if (isEventSupported('wheel')) {
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topWheel', 'wheel', mountAt);
              } else if (isEventSupported('mousewheel')) {
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topWheel', 'mousewheel', mountAt);
              } else {
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topWheel', 'DOMMouseScroll', mountAt);
              }
            } else if (dependency === 'topScroll') {
              if (isEventSupported('scroll', true)) {
                ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent('topScroll', 'scroll', mountAt);
              } else {
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topScroll', 'scroll', ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);
              }
            } else if (dependency === 'topFocus' || dependency === 'topBlur') {
              if (isEventSupported('focus', true)) {
                ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent('topFocus', 'focus', mountAt);
                ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent('topBlur', 'blur', mountAt);
              } else if (isEventSupported('focusin')) {
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topFocus', 'focusin', mountAt);
                ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent('topBlur', 'focusout', mountAt);
              }
              isListening.topBlur = true;
              isListening.topFocus = true;
            } else if (topEventMapping.hasOwnProperty(dependency)) {
              ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency, topEventMapping[dependency], mountAt);
            }
            isListening[dependency] = true;
          }
        }
      },
      trapBubbledEvent: function (topLevelType, handlerBaseName, handle) {
        return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType, handlerBaseName, handle);
      },
      trapCapturedEvent: function (topLevelType, handlerBaseName, handle) {
        return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType, handlerBaseName, handle);
      },
      supportsEventPageXY: function () {
        if (!document.createEvent) {
          return false;
        }
        var ev = document.createEvent('MouseEvent');
        return ev != null && 'pageX' in ev;
      },
      ensureScrollValueMonitoring: function () {
        if (hasEventPageXY === undefined) {
          hasEventPageXY = ReactBrowserEventEmitter.supportsEventPageXY();
        }
        if (!hasEventPageXY && !isMonitoringScrollValue) {
          var refresh = ViewportMetrics.refreshScrollValues;
          ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
          isMonitoringScrollValue = true;
        }
      }
    });
    module.exports = ReactBrowserEventEmitter;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactDOMComponentFlags.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ReactDOMComponentFlags = {
    hasCachedChildNodes: 1 << 0
  };

  module.exports = ReactDOMComponentFlags;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:react-dom@15.4.2/lib/DOMProperty.js', 'npm:react-dom@15.4.2/lib/ReactDOMComponentFlags.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    var DOMProperty = $__require('npm:react-dom@15.4.2/lib/DOMProperty.js');
    var ReactDOMComponentFlags = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponentFlags.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
    var Flags = ReactDOMComponentFlags;
    var internalInstanceKey = '__reactInternalInstance$' + Math.random().toString(36).slice(2);
    function shouldPrecacheNode(node, nodeID) {
      return node.nodeType === 1 && node.getAttribute(ATTR_NAME) === String(nodeID) || node.nodeType === 8 && node.nodeValue === ' react-text: ' + nodeID + ' ' || node.nodeType === 8 && node.nodeValue === ' react-empty: ' + nodeID + ' ';
    }
    function getRenderedHostOrTextFromComponent(component) {
      var rendered;
      while (rendered = component._renderedComponent) {
        component = rendered;
      }
      return component;
    }
    function precacheNode(inst, node) {
      var hostInst = getRenderedHostOrTextFromComponent(inst);
      hostInst._hostNode = node;
      node[internalInstanceKey] = hostInst;
    }
    function uncacheNode(inst) {
      var node = inst._hostNode;
      if (node) {
        delete node[internalInstanceKey];
        inst._hostNode = null;
      }
    }
    function precacheChildNodes(inst, node) {
      if (inst._flags & Flags.hasCachedChildNodes) {
        return;
      }
      var children = inst._renderedChildren;
      var childNode = node.firstChild;
      outer: for (var name in children) {
        if (!children.hasOwnProperty(name)) {
          continue;
        }
        var childInst = children[name];
        var childID = getRenderedHostOrTextFromComponent(childInst)._domID;
        if (childID === 0) {
          continue;
        }
        for (; childNode !== null; childNode = childNode.nextSibling) {
          if (shouldPrecacheNode(childNode, childID)) {
            precacheNode(childInst, childNode);
            continue outer;
          }
        }
        !false ? 'production' !== 'production' ? invariant(false, 'Unable to find element with ID %s.', childID) : _prodInvariant('32', childID) : void 0;
      }
      inst._flags |= Flags.hasCachedChildNodes;
    }
    function getClosestInstanceFromNode(node) {
      if (node[internalInstanceKey]) {
        return node[internalInstanceKey];
      }
      var parents = [];
      while (!node[internalInstanceKey]) {
        parents.push(node);
        if (node.parentNode) {
          node = node.parentNode;
        } else {
          return null;
        }
      }
      var closest;
      var inst;
      for (; node && (inst = node[internalInstanceKey]); node = parents.pop()) {
        closest = inst;
        if (parents.length) {
          precacheChildNodes(inst, node);
        }
      }
      return closest;
    }
    function getInstanceFromNode(node) {
      var inst = getClosestInstanceFromNode(node);
      if (inst != null && inst._hostNode === node) {
        return inst;
      } else {
        return null;
      }
    }
    function getNodeFromInstance(inst) {
      !(inst._hostNode !== undefined) ? 'production' !== 'production' ? invariant(false, 'getNodeFromInstance: Invalid argument.') : _prodInvariant('33') : void 0;
      if (inst._hostNode) {
        return inst._hostNode;
      }
      var parents = [];
      while (!inst._hostNode) {
        parents.push(inst);
        !inst._hostParent ? 'production' !== 'production' ? invariant(false, 'React DOM tree root should always have a node reference.') : _prodInvariant('34') : void 0;
        inst = inst._hostParent;
      }
      for (; parents.length; inst = parents.pop()) {
        precacheChildNodes(inst, inst._hostNode);
      }
      return inst._hostNode;
    }
    var ReactDOMComponentTree = {
      getClosestInstanceFromNode: getClosestInstanceFromNode,
      getInstanceFromNode: getInstanceFromNode,
      getNodeFromInstance: getNodeFromInstance,
      precacheChildNodes: precacheChildNodes,
      precacheNode: precacheNode,
      uncacheNode: uncacheNode
    };
    module.exports = ReactDOMComponentTree;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/validateDOMNesting.js', ['npm:object-assign@4.1.1.js', 'npm:fbjs@0.8.9/lib/emptyFunction.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _assign = $__require('npm:object-assign@4.1.1.js');
    var emptyFunction = $__require('npm:fbjs@0.8.9/lib/emptyFunction.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var validateDOMNesting = emptyFunction;
    if ('production' !== 'production') {
      var specialTags = ['address', 'applet', 'area', 'article', 'aside', 'base', 'basefont', 'bgsound', 'blockquote', 'body', 'br', 'button', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dir', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'iframe', 'img', 'input', 'isindex', 'li', 'link', 'listing', 'main', 'marquee', 'menu', 'menuitem', 'meta', 'nav', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'p', 'param', 'plaintext', 'pre', 'script', 'section', 'select', 'source', 'style', 'summary', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul', 'wbr', 'xmp'];
      var inScopeTags = ['applet', 'caption', 'html', 'table', 'td', 'th', 'marquee', 'object', 'template', 'foreignObject', 'desc', 'title'];
      var buttonScopeTags = inScopeTags.concat(['button']);
      var impliedEndTags = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'];
      var emptyAncestorInfo = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      var updatedAncestorInfo = function (oldInfo, tag, instance) {
        var ancestorInfo = _assign({}, oldInfo || emptyAncestorInfo);
        var info = {
          tag: tag,
          instance: instance
        };
        if (inScopeTags.indexOf(tag) !== -1) {
          ancestorInfo.aTagInScope = null;
          ancestorInfo.buttonTagInScope = null;
          ancestorInfo.nobrTagInScope = null;
        }
        if (buttonScopeTags.indexOf(tag) !== -1) {
          ancestorInfo.pTagInButtonScope = null;
        }
        if (specialTags.indexOf(tag) !== -1 && tag !== 'address' && tag !== 'div' && tag !== 'p') {
          ancestorInfo.listItemTagAutoclosing = null;
          ancestorInfo.dlItemTagAutoclosing = null;
        }
        ancestorInfo.current = info;
        if (tag === 'form') {
          ancestorInfo.formTag = info;
        }
        if (tag === 'a') {
          ancestorInfo.aTagInScope = info;
        }
        if (tag === 'button') {
          ancestorInfo.buttonTagInScope = info;
        }
        if (tag === 'nobr') {
          ancestorInfo.nobrTagInScope = info;
        }
        if (tag === 'p') {
          ancestorInfo.pTagInButtonScope = info;
        }
        if (tag === 'li') {
          ancestorInfo.listItemTagAutoclosing = info;
        }
        if (tag === 'dd' || tag === 'dt') {
          ancestorInfo.dlItemTagAutoclosing = info;
        }
        return ancestorInfo;
      };
      var isTagValidWithParent = function (tag, parentTag) {
        switch (parentTag) {
          case 'select':
            return tag === 'option' || tag === 'optgroup' || tag === '#text';
          case 'optgroup':
            return tag === 'option' || tag === '#text';
          case 'option':
            return tag === '#text';
          case 'tr':
            return tag === 'th' || tag === 'td' || tag === 'style' || tag === 'script' || tag === 'template';
          case 'tbody':
          case 'thead':
          case 'tfoot':
            return tag === 'tr' || tag === 'style' || tag === 'script' || tag === 'template';
          case 'colgroup':
            return tag === 'col' || tag === 'template';
          case 'table':
            return tag === 'caption' || tag === 'colgroup' || tag === 'tbody' || tag === 'tfoot' || tag === 'thead' || tag === 'style' || tag === 'script' || tag === 'template';
          case 'head':
            return tag === 'base' || tag === 'basefont' || tag === 'bgsound' || tag === 'link' || tag === 'meta' || tag === 'title' || tag === 'noscript' || tag === 'noframes' || tag === 'style' || tag === 'script' || tag === 'template';
          case 'html':
            return tag === 'head' || tag === 'body';
          case '#document':
            return tag === 'html';
        }
        switch (tag) {
          case 'h1':
          case 'h2':
          case 'h3':
          case 'h4':
          case 'h5':
          case 'h6':
            return parentTag !== 'h1' && parentTag !== 'h2' && parentTag !== 'h3' && parentTag !== 'h4' && parentTag !== 'h5' && parentTag !== 'h6';
          case 'rp':
          case 'rt':
            return impliedEndTags.indexOf(parentTag) === -1;
          case 'body':
          case 'caption':
          case 'col':
          case 'colgroup':
          case 'frame':
          case 'head':
          case 'html':
          case 'tbody':
          case 'td':
          case 'tfoot':
          case 'th':
          case 'thead':
          case 'tr':
            return parentTag == null;
        }
        return true;
      };
      var findInvalidAncestorForTag = function (tag, ancestorInfo) {
        switch (tag) {
          case 'address':
          case 'article':
          case 'aside':
          case 'blockquote':
          case 'center':
          case 'details':
          case 'dialog':
          case 'dir':
          case 'div':
          case 'dl':
          case 'fieldset':
          case 'figcaption':
          case 'figure':
          case 'footer':
          case 'header':
          case 'hgroup':
          case 'main':
          case 'menu':
          case 'nav':
          case 'ol':
          case 'p':
          case 'section':
          case 'summary':
          case 'ul':
          case 'pre':
          case 'listing':
          case 'table':
          case 'hr':
          case 'xmp':
          case 'h1':
          case 'h2':
          case 'h3':
          case 'h4':
          case 'h5':
          case 'h6':
            return ancestorInfo.pTagInButtonScope;
          case 'form':
            return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;
          case 'li':
            return ancestorInfo.listItemTagAutoclosing;
          case 'dd':
          case 'dt':
            return ancestorInfo.dlItemTagAutoclosing;
          case 'button':
            return ancestorInfo.buttonTagInScope;
          case 'a':
            return ancestorInfo.aTagInScope;
          case 'nobr':
            return ancestorInfo.nobrTagInScope;
        }
        return null;
      };
      var findOwnerStack = function (instance) {
        if (!instance) {
          return [];
        }
        var stack = [];
        do {
          stack.push(instance);
        } while (instance = instance._currentElement._owner);
        stack.reverse();
        return stack;
      };
      var didWarn = {};
      validateDOMNesting = function (childTag, childText, childInstance, ancestorInfo) {
        ancestorInfo = ancestorInfo || emptyAncestorInfo;
        var parentInfo = ancestorInfo.current;
        var parentTag = parentInfo && parentInfo.tag;
        if (childText != null) {
          'production' !== 'production' ? warning(childTag == null, 'validateDOMNesting: when childText is passed, childTag should be null') : void 0;
          childTag = '#text';
        }
        var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
        var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
        var problematic = invalidParent || invalidAncestor;
        if (problematic) {
          var ancestorTag = problematic.tag;
          var ancestorInstance = problematic.instance;
          var childOwner = childInstance && childInstance._currentElement._owner;
          var ancestorOwner = ancestorInstance && ancestorInstance._currentElement._owner;
          var childOwners = findOwnerStack(childOwner);
          var ancestorOwners = findOwnerStack(ancestorOwner);
          var minStackLen = Math.min(childOwners.length, ancestorOwners.length);
          var i;
          var deepestCommon = -1;
          for (i = 0; i < minStackLen; i++) {
            if (childOwners[i] === ancestorOwners[i]) {
              deepestCommon = i;
            } else {
              break;
            }
          }
          var UNKNOWN = '(unknown)';
          var childOwnerNames = childOwners.slice(deepestCommon + 1).map(function (inst) {
            return inst.getName() || UNKNOWN;
          });
          var ancestorOwnerNames = ancestorOwners.slice(deepestCommon + 1).map(function (inst) {
            return inst.getName() || UNKNOWN;
          });
          var ownerInfo = [].concat(deepestCommon !== -1 ? childOwners[deepestCommon].getName() || UNKNOWN : [], ancestorOwnerNames, ancestorTag, invalidAncestor ? ['...'] : [], childOwnerNames, childTag).join(' > ');
          var warnKey = !!invalidParent + '|' + childTag + '|' + ancestorTag + '|' + ownerInfo;
          if (didWarn[warnKey]) {
            return;
          }
          didWarn[warnKey] = true;
          var tagDisplayName = childTag;
          var whitespaceInfo = '';
          if (childTag === '#text') {
            if (/\S/.test(childText)) {
              tagDisplayName = 'Text nodes';
            } else {
              tagDisplayName = 'Whitespace text nodes';
              whitespaceInfo = ' Make sure you don\'t have any extra whitespace between tags on ' + 'each line of your source code.';
            }
          } else {
            tagDisplayName = '<' + childTag + '>';
          }
          if (invalidParent) {
            var info = '';
            if (ancestorTag === 'table' && childTag === 'tr') {
              info += ' Add a <tbody> to your code to match the DOM tree generated by ' + 'the browser.';
            }
            'production' !== 'production' ? warning(false, 'validateDOMNesting(...): %s cannot appear as a child of <%s>.%s ' + 'See %s.%s', tagDisplayName, ancestorTag, whitespaceInfo, ownerInfo, info) : void 0;
          } else {
            'production' !== 'production' ? warning(false, 'validateDOMNesting(...): %s cannot appear as a descendant of ' + '<%s>. See %s.', tagDisplayName, ancestorTag, ownerInfo) : void 0;
          }
        }
      };
      validateDOMNesting.updatedAncestorInfo = updatedAncestorInfo;
      validateDOMNesting.isTagValidInContext = function (tag, ancestorInfo) {
        ancestorInfo = ancestorInfo || emptyAncestorInfo;
        var parentInfo = ancestorInfo.current;
        var parentTag = parentInfo && parentInfo.tag;
        return isTagValidWithParent(tag, parentTag) && !findInvalidAncestorForTag(tag, ancestorInfo);
      };
    }
    module.exports = validateDOMNesting;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactDOMContainerInfo.js', ['npm:react-dom@15.4.2/lib/validateDOMNesting.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var validateDOMNesting = $__require('npm:react-dom@15.4.2/lib/validateDOMNesting.js');
    var DOC_NODE_TYPE = 9;
    function ReactDOMContainerInfo(topLevelWrapper, node) {
      var info = {
        _topLevelWrapper: topLevelWrapper,
        _idCounter: 1,
        _ownerDocument: node ? node.nodeType === DOC_NODE_TYPE ? node : node.ownerDocument : null,
        _node: node,
        _tag: node ? node.nodeName.toLowerCase() : null,
        _namespaceURI: node ? node.namespaceURI : null
      };
      if ('production' !== 'production') {
        info._ancestorInfo = node ? validateDOMNesting.updatedAncestorInfo(null, info._tag, null) : null;
      }
      return info;
    }
    module.exports = ReactDOMContainerInfo;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactDOMFeatureFlags.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ReactDOMFeatureFlags = {
    useCreateElement: true,
    useFiber: false
  };

  module.exports = ReactDOMFeatureFlags;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/adler32.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var MOD = 65521;

  // adler32 is not cryptographically strong, and is only used to sanity check that
  // markup generated on the server matches the markup generated on the client.
  // This implementation (a modified version of the SheetJS version) has been optimized
  // for our use case, at the expense of conforming to the adler32 specification
  // for non-ascii inputs.
  function adler32(data) {
    var a = 1;
    var b = 0;
    var i = 0;
    var l = data.length;
    var m = l & ~0x3;
    while (i < m) {
      var n = Math.min(i + 4096, m);
      for (; i < n; i += 4) {
        b += (a += data.charCodeAt(i)) + (a += data.charCodeAt(i + 1)) + (a += data.charCodeAt(i + 2)) + (a += data.charCodeAt(i + 3));
      }
      a %= MOD;
      b %= MOD;
    }
    for (; i < l; i++) {
      b += a += data.charCodeAt(i);
    }
    a %= MOD;
    b %= MOD;
    return a | b << 16;
  }

  module.exports = adler32;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactMarkupChecksum.js', ['npm:react-dom@15.4.2/lib/adler32.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var adler32 = $__require('npm:react-dom@15.4.2/lib/adler32.js');
  var TAG_END = /\/?>/;
  var COMMENT_START = /^<\!\-\-/;
  var ReactMarkupChecksum = {
    CHECKSUM_ATTR_NAME: 'data-react-checksum',
    addChecksumToMarkup: function (markup) {
      var checksum = adler32(markup);
      if (COMMENT_START.test(markup)) {
        return markup;
      } else {
        return markup.replace(TAG_END, ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '"$&');
      }
    },
    canReuseMarkup: function (markup, element) {
      var existingChecksum = element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
      existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
      var markupChecksum = adler32(markup);
      return markupChecksum === existingChecksum;
    }
  };
  module.exports = ReactMarkupChecksum;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactUpdateQueue.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:react@15.4.2/lib/ReactCurrentOwner.js', 'npm:react-dom@15.4.2/lib/ReactInstanceMap.js', 'npm:react-dom@15.4.2/lib/ReactInstrumentation.js', 'npm:react-dom@15.4.2/lib/ReactUpdates.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    var ReactCurrentOwner = $__require('npm:react@15.4.2/lib/ReactCurrentOwner.js');
    var ReactInstanceMap = $__require('npm:react-dom@15.4.2/lib/ReactInstanceMap.js');
    var ReactInstrumentation = $__require('npm:react-dom@15.4.2/lib/ReactInstrumentation.js');
    var ReactUpdates = $__require('npm:react-dom@15.4.2/lib/ReactUpdates.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    function enqueueUpdate(internalInstance) {
      ReactUpdates.enqueueUpdate(internalInstance);
    }
    function formatUnexpectedArgument(arg) {
      var type = typeof arg;
      if (type !== 'object') {
        return type;
      }
      var displayName = arg.constructor && arg.constructor.name || type;
      var keys = Object.keys(arg);
      if (keys.length > 0 && keys.length < 20) {
        return displayName + ' (keys: ' + keys.join(', ') + ')';
      }
      return displayName;
    }
    function getInternalInstanceReadyForUpdate(publicInstance, callerName) {
      var internalInstance = ReactInstanceMap.get(publicInstance);
      if (!internalInstance) {
        if ('production' !== 'production') {
          var ctor = publicInstance.constructor;
          'production' !== 'production' ? warning(!callerName, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, ctor && (ctor.displayName || ctor.name) || 'ReactClass') : void 0;
        }
        return null;
      }
      if ('production' !== 'production') {
        'production' !== 'production' ? warning(ReactCurrentOwner.current == null, '%s(...): Cannot update during an existing state transition (such as ' + 'within `render` or another component\'s constructor). Render methods ' + 'should be a pure function of props and state; constructor ' + 'side-effects are an anti-pattern, but can be moved to ' + '`componentWillMount`.', callerName) : void 0;
      }
      return internalInstance;
    }
    var ReactUpdateQueue = {
      isMounted: function (publicInstance) {
        if ('production' !== 'production') {
          var owner = ReactCurrentOwner.current;
          if (owner !== null) {
            'production' !== 'production' ? warning(owner._warnedAboutRefsInRender, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : void 0;
            owner._warnedAboutRefsInRender = true;
          }
        }
        var internalInstance = ReactInstanceMap.get(publicInstance);
        if (internalInstance) {
          return !!internalInstance._renderedComponent;
        } else {
          return false;
        }
      },
      enqueueCallback: function (publicInstance, callback, callerName) {
        ReactUpdateQueue.validateCallback(callback, callerName);
        var internalInstance = getInternalInstanceReadyForUpdate(publicInstance);
        if (!internalInstance) {
          return null;
        }
        if (internalInstance._pendingCallbacks) {
          internalInstance._pendingCallbacks.push(callback);
        } else {
          internalInstance._pendingCallbacks = [callback];
        }
        enqueueUpdate(internalInstance);
      },
      enqueueCallbackInternal: function (internalInstance, callback) {
        if (internalInstance._pendingCallbacks) {
          internalInstance._pendingCallbacks.push(callback);
        } else {
          internalInstance._pendingCallbacks = [callback];
        }
        enqueueUpdate(internalInstance);
      },
      enqueueForceUpdate: function (publicInstance) {
        var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'forceUpdate');
        if (!internalInstance) {
          return;
        }
        internalInstance._pendingForceUpdate = true;
        enqueueUpdate(internalInstance);
      },
      enqueueReplaceState: function (publicInstance, completeState) {
        var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceState');
        if (!internalInstance) {
          return;
        }
        internalInstance._pendingStateQueue = [completeState];
        internalInstance._pendingReplaceState = true;
        enqueueUpdate(internalInstance);
      },
      enqueueSetState: function (publicInstance, partialState) {
        if ('production' !== 'production') {
          ReactInstrumentation.debugTool.onSetState();
          'production' !== 'production' ? warning(partialState != null, 'setState(...): You passed an undefined or null state object; ' + 'instead, use forceUpdate().') : void 0;
        }
        var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setState');
        if (!internalInstance) {
          return;
        }
        var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
        queue.push(partialState);
        enqueueUpdate(internalInstance);
      },
      enqueueElementInternal: function (internalInstance, nextElement, nextContext) {
        internalInstance._pendingElement = nextElement;
        internalInstance._context = nextContext;
        enqueueUpdate(internalInstance);
      },
      validateCallback: function (callback, callerName) {
        !(!callback || typeof callback === 'function') ? 'production' !== 'production' ? invariant(false, '%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.', callerName, formatUnexpectedArgument(callback)) : _prodInvariant('122', callerName, formatUnexpectedArgument(callback)) : void 0;
      }
    };
    module.exports = ReactUpdateQueue;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/CallbackQueue.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:react-dom@15.4.2/lib/PooledClass.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var PooledClass = $__require('npm:react-dom@15.4.2/lib/PooledClass.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var CallbackQueue = function () {
      function CallbackQueue(arg) {
        _classCallCheck(this, CallbackQueue);
        this._callbacks = null;
        this._contexts = null;
        this._arg = arg;
      }
      CallbackQueue.prototype.enqueue = function enqueue(callback, context) {
        this._callbacks = this._callbacks || [];
        this._callbacks.push(callback);
        this._contexts = this._contexts || [];
        this._contexts.push(context);
      };
      CallbackQueue.prototype.notifyAll = function notifyAll() {
        var callbacks = this._callbacks;
        var contexts = this._contexts;
        var arg = this._arg;
        if (callbacks && contexts) {
          !(callbacks.length === contexts.length) ? 'production' !== 'production' ? invariant(false, 'Mismatched list of contexts in callback queue') : _prodInvariant('24') : void 0;
          this._callbacks = null;
          this._contexts = null;
          for (var i = 0; i < callbacks.length; i++) {
            callbacks[i].call(contexts[i], arg);
          }
          callbacks.length = 0;
          contexts.length = 0;
        }
      };
      CallbackQueue.prototype.checkpoint = function checkpoint() {
        return this._callbacks ? this._callbacks.length : 0;
      };
      CallbackQueue.prototype.rollback = function rollback(len) {
        if (this._callbacks && this._contexts) {
          this._callbacks.length = len;
          this._contexts.length = len;
        }
      };
      CallbackQueue.prototype.reset = function reset() {
        this._callbacks = null;
        this._contexts = null;
      };
      CallbackQueue.prototype.destructor = function destructor() {
        this.reset();
      };
      return CallbackQueue;
    }();
    module.exports = PooledClass.addPoolingTo(CallbackQueue);
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/PooledClass.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var oneArgumentPooler = function (copyFieldsFrom) {
      var Klass = this;
      if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, copyFieldsFrom);
        return instance;
      } else {
        return new Klass(copyFieldsFrom);
      }
    };
    var twoArgumentPooler = function (a1, a2) {
      var Klass = this;
      if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, a1, a2);
        return instance;
      } else {
        return new Klass(a1, a2);
      }
    };
    var threeArgumentPooler = function (a1, a2, a3) {
      var Klass = this;
      if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, a1, a2, a3);
        return instance;
      } else {
        return new Klass(a1, a2, a3);
      }
    };
    var fourArgumentPooler = function (a1, a2, a3, a4) {
      var Klass = this;
      if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, a1, a2, a3, a4);
        return instance;
      } else {
        return new Klass(a1, a2, a3, a4);
      }
    };
    var standardReleaser = function (instance) {
      var Klass = this;
      !(instance instanceof Klass) ? 'production' !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
      instance.destructor();
      if (Klass.instancePool.length < Klass.poolSize) {
        Klass.instancePool.push(instance);
      }
    };
    var DEFAULT_POOL_SIZE = 10;
    var DEFAULT_POOLER = oneArgumentPooler;
    var addPoolingTo = function (CopyConstructor, pooler) {
      var NewKlass = CopyConstructor;
      NewKlass.instancePool = [];
      NewKlass.getPooled = pooler || DEFAULT_POOLER;
      if (!NewKlass.poolSize) {
        NewKlass.poolSize = DEFAULT_POOL_SIZE;
      }
      NewKlass.release = standardReleaser;
      return NewKlass;
    };
    var PooledClass = {
      addPoolingTo: addPoolingTo,
      oneArgumentPooler: oneArgumentPooler,
      twoArgumentPooler: twoArgumentPooler,
      threeArgumentPooler: threeArgumentPooler,
      fourArgumentPooler: fourArgumentPooler
    };
    module.exports = PooledClass;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactFeatureFlags.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ReactFeatureFlags = {
    // When true, call console.time() before and .timeEnd() after each top-level
    // render (both initial renders and updates). Useful when looking at prod-mode
    // timeline profiles in Chrome, for example.
    logTopLevelRenders: false
  };

  module.exports = ReactFeatureFlags;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/Transaction.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var OBSERVED_ERROR = {};
    var TransactionImpl = {
      reinitializeTransaction: function () {
        this.transactionWrappers = this.getTransactionWrappers();
        if (this.wrapperInitData) {
          this.wrapperInitData.length = 0;
        } else {
          this.wrapperInitData = [];
        }
        this._isInTransaction = false;
      },
      _isInTransaction: false,
      getTransactionWrappers: null,
      isInTransaction: function () {
        return !!this._isInTransaction;
      },
      perform: function (method, scope, a, b, c, d, e, f) {
        !!this.isInTransaction() ? 'production' !== 'production' ? invariant(false, 'Transaction.perform(...): Cannot initialize a transaction when there is already an outstanding transaction.') : _prodInvariant('27') : void 0;
        var errorThrown;
        var ret;
        try {
          this._isInTransaction = true;
          errorThrown = true;
          this.initializeAll(0);
          ret = method.call(scope, a, b, c, d, e, f);
          errorThrown = false;
        } finally {
          try {
            if (errorThrown) {
              try {
                this.closeAll(0);
              } catch (err) {}
            } else {
              this.closeAll(0);
            }
          } finally {
            this._isInTransaction = false;
          }
        }
        return ret;
      },
      initializeAll: function (startIndex) {
        var transactionWrappers = this.transactionWrappers;
        for (var i = startIndex; i < transactionWrappers.length; i++) {
          var wrapper = transactionWrappers[i];
          try {
            this.wrapperInitData[i] = OBSERVED_ERROR;
            this.wrapperInitData[i] = wrapper.initialize ? wrapper.initialize.call(this) : null;
          } finally {
            if (this.wrapperInitData[i] === OBSERVED_ERROR) {
              try {
                this.initializeAll(i + 1);
              } catch (err) {}
            }
          }
        }
      },
      closeAll: function (startIndex) {
        !this.isInTransaction() ? 'production' !== 'production' ? invariant(false, 'Transaction.closeAll(): Cannot close transaction when none are open.') : _prodInvariant('28') : void 0;
        var transactionWrappers = this.transactionWrappers;
        for (var i = startIndex; i < transactionWrappers.length; i++) {
          var wrapper = transactionWrappers[i];
          var initData = this.wrapperInitData[i];
          var errorThrown;
          try {
            errorThrown = true;
            if (initData !== OBSERVED_ERROR && wrapper.close) {
              wrapper.close.call(this, initData);
            }
            errorThrown = false;
          } finally {
            if (errorThrown) {
              try {
                this.closeAll(i + 1);
              } catch (e) {}
            }
          }
        }
        this.wrapperInitData.length = 0;
      }
    };
    module.exports = TransactionImpl;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactUpdates.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:object-assign@4.1.1.js', 'npm:react-dom@15.4.2/lib/CallbackQueue.js', 'npm:react-dom@15.4.2/lib/PooledClass.js', 'npm:react-dom@15.4.2/lib/ReactFeatureFlags.js', 'npm:react-dom@15.4.2/lib/ReactReconciler.js', 'npm:react-dom@15.4.2/lib/Transaction.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js'),
        _assign = $__require('npm:object-assign@4.1.1.js');
    var CallbackQueue = $__require('npm:react-dom@15.4.2/lib/CallbackQueue.js');
    var PooledClass = $__require('npm:react-dom@15.4.2/lib/PooledClass.js');
    var ReactFeatureFlags = $__require('npm:react-dom@15.4.2/lib/ReactFeatureFlags.js');
    var ReactReconciler = $__require('npm:react-dom@15.4.2/lib/ReactReconciler.js');
    var Transaction = $__require('npm:react-dom@15.4.2/lib/Transaction.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var dirtyComponents = [];
    var updateBatchNumber = 0;
    var asapCallbackQueue = CallbackQueue.getPooled();
    var asapEnqueued = false;
    var batchingStrategy = null;
    function ensureInjected() {
      !(ReactUpdates.ReactReconcileTransaction && batchingStrategy) ? 'production' !== 'production' ? invariant(false, 'ReactUpdates: must inject a reconcile transaction class and batching strategy') : _prodInvariant('123') : void 0;
    }
    var NESTED_UPDATES = {
      initialize: function () {
        this.dirtyComponentsLength = dirtyComponents.length;
      },
      close: function () {
        if (this.dirtyComponentsLength !== dirtyComponents.length) {
          dirtyComponents.splice(0, this.dirtyComponentsLength);
          flushBatchedUpdates();
        } else {
          dirtyComponents.length = 0;
        }
      }
    };
    var UPDATE_QUEUEING = {
      initialize: function () {
        this.callbackQueue.reset();
      },
      close: function () {
        this.callbackQueue.notifyAll();
      }
    };
    var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];
    function ReactUpdatesFlushTransaction() {
      this.reinitializeTransaction();
      this.dirtyComponentsLength = null;
      this.callbackQueue = CallbackQueue.getPooled();
      this.reconcileTransaction = ReactUpdates.ReactReconcileTransaction.getPooled(true);
    }
    _assign(ReactUpdatesFlushTransaction.prototype, Transaction, {
      getTransactionWrappers: function () {
        return TRANSACTION_WRAPPERS;
      },
      destructor: function () {
        this.dirtyComponentsLength = null;
        CallbackQueue.release(this.callbackQueue);
        this.callbackQueue = null;
        ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
        this.reconcileTransaction = null;
      },
      perform: function (method, scope, a) {
        return Transaction.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, method, scope, a);
      }
    });
    PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);
    function batchedUpdates(callback, a, b, c, d, e) {
      ensureInjected();
      return batchingStrategy.batchedUpdates(callback, a, b, c, d, e);
    }
    function mountOrderComparator(c1, c2) {
      return c1._mountOrder - c2._mountOrder;
    }
    function runBatchedUpdates(transaction) {
      var len = transaction.dirtyComponentsLength;
      !(len === dirtyComponents.length) ? 'production' !== 'production' ? invariant(false, 'Expected flush transaction\'s stored dirty-components length (%s) to match dirty-components array length (%s).', len, dirtyComponents.length) : _prodInvariant('124', len, dirtyComponents.length) : void 0;
      dirtyComponents.sort(mountOrderComparator);
      updateBatchNumber++;
      for (var i = 0; i < len; i++) {
        var component = dirtyComponents[i];
        var callbacks = component._pendingCallbacks;
        component._pendingCallbacks = null;
        var markerName;
        if (ReactFeatureFlags.logTopLevelRenders) {
          var namedComponent = component;
          if (component._currentElement.type.isReactTopLevelWrapper) {
            namedComponent = component._renderedComponent;
          }
          markerName = 'React update: ' + namedComponent.getName();
          console.time(markerName);
        }
        ReactReconciler.performUpdateIfNecessary(component, transaction.reconcileTransaction, updateBatchNumber);
        if (markerName) {
          console.timeEnd(markerName);
        }
        if (callbacks) {
          for (var j = 0; j < callbacks.length; j++) {
            transaction.callbackQueue.enqueue(callbacks[j], component.getPublicInstance());
          }
        }
      }
    }
    var flushBatchedUpdates = function () {
      while (dirtyComponents.length || asapEnqueued) {
        if (dirtyComponents.length) {
          var transaction = ReactUpdatesFlushTransaction.getPooled();
          transaction.perform(runBatchedUpdates, null, transaction);
          ReactUpdatesFlushTransaction.release(transaction);
        }
        if (asapEnqueued) {
          asapEnqueued = false;
          var queue = asapCallbackQueue;
          asapCallbackQueue = CallbackQueue.getPooled();
          queue.notifyAll();
          CallbackQueue.release(queue);
        }
      }
    };
    function enqueueUpdate(component) {
      ensureInjected();
      if (!batchingStrategy.isBatchingUpdates) {
        batchingStrategy.batchedUpdates(enqueueUpdate, component);
        return;
      }
      dirtyComponents.push(component);
      if (component._updateBatchNumber == null) {
        component._updateBatchNumber = updateBatchNumber + 1;
      }
    }
    function asap(callback, context) {
      !batchingStrategy.isBatchingUpdates ? 'production' !== 'production' ? invariant(false, 'ReactUpdates.asap: Can\'t enqueue an asap callback in a context whereupdates are not being batched.') : _prodInvariant('125') : void 0;
      asapCallbackQueue.enqueue(callback, context);
      asapEnqueued = true;
    }
    var ReactUpdatesInjection = {
      injectReconcileTransaction: function (ReconcileTransaction) {
        !ReconcileTransaction ? 'production' !== 'production' ? invariant(false, 'ReactUpdates: must provide a reconcile transaction class') : _prodInvariant('126') : void 0;
        ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
      },
      injectBatchingStrategy: function (_batchingStrategy) {
        !_batchingStrategy ? 'production' !== 'production' ? invariant(false, 'ReactUpdates: must provide a batching strategy') : _prodInvariant('127') : void 0;
        !(typeof _batchingStrategy.batchedUpdates === 'function') ? 'production' !== 'production' ? invariant(false, 'ReactUpdates: must provide a batchedUpdates() function') : _prodInvariant('128') : void 0;
        !(typeof _batchingStrategy.isBatchingUpdates === 'boolean') ? 'production' !== 'production' ? invariant(false, 'ReactUpdates: must provide an isBatchingUpdates boolean attribute') : _prodInvariant('129') : void 0;
        batchingStrategy = _batchingStrategy;
      }
    };
    var ReactUpdates = {
      ReactReconcileTransaction: null,
      batchedUpdates: batchedUpdates,
      enqueueUpdate: enqueueUpdate,
      flushBatchedUpdates: flushBatchedUpdates,
      injection: ReactUpdatesInjection,
      asap: asap
    };
    module.exports = ReactUpdates;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactComponentEnvironment.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var injected = false;
    var ReactComponentEnvironment = {
      replaceNodeWithMarkup: null,
      processChildrenUpdates: null,
      injection: { injectEnvironment: function (environment) {
          !!injected ? 'production' !== 'production' ? invariant(false, 'ReactCompositeComponent: injectEnvironment() can only be called once.') : _prodInvariant('104') : void 0;
          ReactComponentEnvironment.replaceNodeWithMarkup = environment.replaceNodeWithMarkup;
          ReactComponentEnvironment.processChildrenUpdates = environment.processChildrenUpdates;
          injected = true;
        } }
    };
    module.exports = ReactComponentEnvironment;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactErrorUtils.js', ['github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var caughtError = null;
    function invokeGuardedCallback(name, func, a) {
      try {
        func(a);
      } catch (x) {
        if (caughtError === null) {
          caughtError = x;
        }
      }
    }
    var ReactErrorUtils = {
      invokeGuardedCallback: invokeGuardedCallback,
      invokeGuardedCallbackWithCatch: invokeGuardedCallback,
      rethrowCaughtError: function () {
        if (caughtError) {
          var error = caughtError;
          caughtError = null;
          throw error;
        }
      }
    };
    if ('production' !== 'production') {
      if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
        var fakeNode = document.createElement('react');
        ReactErrorUtils.invokeGuardedCallback = function (name, func, a) {
          var boundFunc = func.bind(null, a);
          var evtType = 'react-' + name;
          fakeNode.addEventListener(evtType, boundFunc, false);
          var evt = document.createEvent('Event');
          evt.initEvent(evtType, false, false);
          fakeNode.dispatchEvent(evt);
          fakeNode.removeEventListener(evtType, boundFunc, false);
        };
      }
    }
    module.exports = ReactErrorUtils;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactInstanceMap.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  /**
   * `ReactInstanceMap` maintains a mapping from a public facing stateful
   * instance (key) and the internal representation (value). This allows public
   * methods to accept the user facing instance as an argument and map them back
   * to internal methods.
   */

  // TODO: Replace this with ES6: var ReactInstanceMap = new Map();

  var global = this || self,
      GLOBAL = global;
  var ReactInstanceMap = {

    /**
     * This API should be called `delete` but we'd have to make sure to always
     * transform these to strings for IE support. When this transform is fully
     * supported we can rename it.
     */
    remove: function (key) {
      key._reactInternalInstance = undefined;
    },

    get: function (key) {
      return key._reactInternalInstance;
    },

    has: function (key) {
      return key._reactInternalInstance !== undefined;
    },

    set: function (key, value) {
      key._reactInternalInstance = value;
    }

  };

  module.exports = ReactInstanceMap;
});
System.registerDynamic('npm:react@15.4.2/lib/PooledClass.js', ['npm:react@15.4.2/lib/reactProdInvariant.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react@15.4.2/lib/reactProdInvariant.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var oneArgumentPooler = function (copyFieldsFrom) {
      var Klass = this;
      if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, copyFieldsFrom);
        return instance;
      } else {
        return new Klass(copyFieldsFrom);
      }
    };
    var twoArgumentPooler = function (a1, a2) {
      var Klass = this;
      if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, a1, a2);
        return instance;
      } else {
        return new Klass(a1, a2);
      }
    };
    var threeArgumentPooler = function (a1, a2, a3) {
      var Klass = this;
      if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, a1, a2, a3);
        return instance;
      } else {
        return new Klass(a1, a2, a3);
      }
    };
    var fourArgumentPooler = function (a1, a2, a3, a4) {
      var Klass = this;
      if (Klass.instancePool.length) {
        var instance = Klass.instancePool.pop();
        Klass.call(instance, a1, a2, a3, a4);
        return instance;
      } else {
        return new Klass(a1, a2, a3, a4);
      }
    };
    var standardReleaser = function (instance) {
      var Klass = this;
      !(instance instanceof Klass) ? 'production' !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
      instance.destructor();
      if (Klass.instancePool.length < Klass.poolSize) {
        Klass.instancePool.push(instance);
      }
    };
    var DEFAULT_POOL_SIZE = 10;
    var DEFAULT_POOLER = oneArgumentPooler;
    var addPoolingTo = function (CopyConstructor, pooler) {
      var NewKlass = CopyConstructor;
      NewKlass.instancePool = [];
      NewKlass.getPooled = pooler || DEFAULT_POOLER;
      if (!NewKlass.poolSize) {
        NewKlass.poolSize = DEFAULT_POOL_SIZE;
      }
      NewKlass.release = standardReleaser;
      return NewKlass;
    };
    var PooledClass = {
      addPoolingTo: addPoolingTo,
      oneArgumentPooler: oneArgumentPooler,
      twoArgumentPooler: twoArgumentPooler,
      threeArgumentPooler: threeArgumentPooler,
      fourArgumentPooler: fourArgumentPooler
    };
    module.exports = PooledClass;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react@15.4.2/lib/KeyEscapeUtils.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */

  'use strict';

  /**
   * Escape and wrap key so it is safe to use as a reactid
   *
   * @param {string} key to be escaped.
   * @return {string} the escaped key.
   */

  var global = this || self,
      GLOBAL = global;
  function escape(key) {
    var escapeRegex = /[=:]/g;
    var escaperLookup = {
      '=': '=0',
      ':': '=2'
    };
    var escapedString = ('' + key).replace(escapeRegex, function (match) {
      return escaperLookup[match];
    });

    return '$' + escapedString;
  }

  /**
   * Unescape and unwrap key for human-readable display
   *
   * @param {string} key to unescape.
   * @return {string} the unescaped key.
   */
  function unescape(key) {
    var unescapeRegex = /(=0|=2)/g;
    var unescaperLookup = {
      '=0': '=',
      '=2': ':'
    };
    var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

    return ('' + keySubstring).replace(unescapeRegex, function (match) {
      return unescaperLookup[match];
    });
  }

  var KeyEscapeUtils = {
    escape: escape,
    unescape: unescape
  };

  module.exports = KeyEscapeUtils;
});
System.registerDynamic('npm:react@15.4.2/lib/traverseAllChildren.js', ['npm:react@15.4.2/lib/reactProdInvariant.js', 'npm:react@15.4.2/lib/ReactCurrentOwner.js', 'npm:react@15.4.2/lib/ReactElementSymbol.js', 'npm:react@15.4.2/lib/getIteratorFn.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'npm:react@15.4.2/lib/KeyEscapeUtils.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react@15.4.2/lib/reactProdInvariant.js');
    var ReactCurrentOwner = $__require('npm:react@15.4.2/lib/ReactCurrentOwner.js');
    var REACT_ELEMENT_TYPE = $__require('npm:react@15.4.2/lib/ReactElementSymbol.js');
    var getIteratorFn = $__require('npm:react@15.4.2/lib/getIteratorFn.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var KeyEscapeUtils = $__require('npm:react@15.4.2/lib/KeyEscapeUtils.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var SEPARATOR = '.';
    var SUBSEPARATOR = ':';
    var didWarnAboutMaps = false;
    function getComponentKey(component, index) {
      if (component && typeof component === 'object' && component.key != null) {
        return KeyEscapeUtils.escape(component.key);
      }
      return index.toString(36);
    }
    function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
      var type = typeof children;
      if (type === 'undefined' || type === 'boolean') {
        children = null;
      }
      if (children === null || type === 'string' || type === 'number' || type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
        callback(traverseContext, children, nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
        return 1;
      }
      var child;
      var nextName;
      var subtreeCount = 0;
      var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
      if (Array.isArray(children)) {
        for (var i = 0; i < children.length; i++) {
          child = children[i];
          nextName = nextNamePrefix + getComponentKey(child, i);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        var iteratorFn = getIteratorFn(children);
        if (iteratorFn) {
          var iterator = iteratorFn.call(children);
          var step;
          if (iteratorFn !== children.entries) {
            var ii = 0;
            while (!(step = iterator.next()).done) {
              child = step.value;
              nextName = nextNamePrefix + getComponentKey(child, ii++);
              subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
            }
          } else {
            if ('production' !== 'production') {
              var mapsAsChildrenAddendum = '';
              if (ReactCurrentOwner.current) {
                var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
                if (mapsAsChildrenOwnerName) {
                  mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
                }
              }
              'production' !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
              didWarnAboutMaps = true;
            }
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                child = entry[1];
                nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
                subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
              }
            }
          }
        } else if (type === 'object') {
          var addendum = '';
          if ('production' !== 'production') {
            addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
            if (children._isReactElement) {
              addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
            }
            if (ReactCurrentOwner.current) {
              var name = ReactCurrentOwner.current.getName();
              if (name) {
                addendum += ' Check the render method of `' + name + '`.';
              }
            }
          }
          var childrenString = String(children);
          !false ? 'production' !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
        }
      }
      return subtreeCount;
    }
    function traverseAllChildren(children, callback, traverseContext) {
      if (children == null) {
        return 0;
      }
      return traverseAllChildrenImpl(children, '', callback, traverseContext);
    }
    module.exports = traverseAllChildren;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react@15.4.2/lib/ReactChildren.js', ['npm:react@15.4.2/lib/PooledClass.js', 'npm:react@15.4.2/lib/ReactElement.js', 'npm:fbjs@0.8.9/lib/emptyFunction.js', 'npm:react@15.4.2/lib/traverseAllChildren.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var PooledClass = $__require('npm:react@15.4.2/lib/PooledClass.js');
  var ReactElement = $__require('npm:react@15.4.2/lib/ReactElement.js');
  var emptyFunction = $__require('npm:fbjs@0.8.9/lib/emptyFunction.js');
  var traverseAllChildren = $__require('npm:react@15.4.2/lib/traverseAllChildren.js');
  var twoArgumentPooler = PooledClass.twoArgumentPooler;
  var fourArgumentPooler = PooledClass.fourArgumentPooler;
  var userProvidedKeyEscapeRegex = /\/+/g;
  function escapeUserProvidedKey(text) {
    return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
  }
  function ForEachBookKeeping(forEachFunction, forEachContext) {
    this.func = forEachFunction;
    this.context = forEachContext;
    this.count = 0;
  }
  ForEachBookKeeping.prototype.destructor = function () {
    this.func = null;
    this.context = null;
    this.count = 0;
  };
  PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);
  function forEachSingleChild(bookKeeping, child, name) {
    var func = bookKeeping.func,
        context = bookKeeping.context;
    func.call(context, child, bookKeeping.count++);
  }
  function forEachChildren(children, forEachFunc, forEachContext) {
    if (children == null) {
      return children;
    }
    var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
    traverseAllChildren(children, forEachSingleChild, traverseContext);
    ForEachBookKeeping.release(traverseContext);
  }
  function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
    this.result = mapResult;
    this.keyPrefix = keyPrefix;
    this.func = mapFunction;
    this.context = mapContext;
    this.count = 0;
  }
  MapBookKeeping.prototype.destructor = function () {
    this.result = null;
    this.keyPrefix = null;
    this.func = null;
    this.context = null;
    this.count = 0;
  };
  PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);
  function mapSingleChildIntoContext(bookKeeping, child, childKey) {
    var result = bookKeeping.result,
        keyPrefix = bookKeeping.keyPrefix,
        func = bookKeeping.func,
        context = bookKeeping.context;
    var mappedChild = func.call(context, child, bookKeeping.count++);
    if (Array.isArray(mappedChild)) {
      mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
    } else if (mappedChild != null) {
      if (ReactElement.isValidElement(mappedChild)) {
        mappedChild = ReactElement.cloneAndReplaceKey(mappedChild, keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
      }
      result.push(mappedChild);
    }
  }
  function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
    var escapedPrefix = '';
    if (prefix != null) {
      escapedPrefix = escapeUserProvidedKey(prefix) + '/';
    }
    var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
    traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
    MapBookKeeping.release(traverseContext);
  }
  function mapChildren(children, func, context) {
    if (children == null) {
      return children;
    }
    var result = [];
    mapIntoWithKeyPrefixInternal(children, result, null, func, context);
    return result;
  }
  function forEachSingleChildDummy(traverseContext, child, name) {
    return null;
  }
  function countChildren(children, context) {
    return traverseAllChildren(children, forEachSingleChildDummy, null);
  }
  function toArray(children) {
    var result = [];
    mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
    return result;
  }
  var ReactChildren = {
    forEach: forEachChildren,
    map: mapChildren,
    mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
    count: countChildren,
    toArray: toArray
  };
  module.exports = ReactChildren;
});
System.registerDynamic('npm:react@15.4.2/lib/ReactPureComponent.js', ['npm:object-assign@4.1.1.js', 'npm:react@15.4.2/lib/ReactComponent.js', 'npm:react@15.4.2/lib/ReactNoopUpdateQueue.js', 'npm:fbjs@0.8.9/lib/emptyObject.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var _assign = $__require('npm:object-assign@4.1.1.js');
  var ReactComponent = $__require('npm:react@15.4.2/lib/ReactComponent.js');
  var ReactNoopUpdateQueue = $__require('npm:react@15.4.2/lib/ReactNoopUpdateQueue.js');
  var emptyObject = $__require('npm:fbjs@0.8.9/lib/emptyObject.js');
  function ReactPureComponent(props, context, updater) {
    this.props = props;
    this.context = context;
    this.refs = emptyObject;
    this.updater = updater || ReactNoopUpdateQueue;
  }
  function ComponentDummy() {}
  ComponentDummy.prototype = ReactComponent.prototype;
  ReactPureComponent.prototype = new ComponentDummy();
  ReactPureComponent.prototype.constructor = ReactPureComponent;
  _assign(ReactPureComponent.prototype, ReactComponent.prototype);
  ReactPureComponent.prototype.isPureReactComponent = true;
  module.exports = ReactPureComponent;
});
System.registerDynamic('npm:react@15.4.2/lib/ReactComponent.js', ['npm:react@15.4.2/lib/reactProdInvariant.js', 'npm:react@15.4.2/lib/ReactNoopUpdateQueue.js', 'npm:react@15.4.2/lib/canDefineProperty.js', 'npm:fbjs@0.8.9/lib/emptyObject.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react@15.4.2/lib/reactProdInvariant.js');
    var ReactNoopUpdateQueue = $__require('npm:react@15.4.2/lib/ReactNoopUpdateQueue.js');
    var canDefineProperty = $__require('npm:react@15.4.2/lib/canDefineProperty.js');
    var emptyObject = $__require('npm:fbjs@0.8.9/lib/emptyObject.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    function ReactComponent(props, context, updater) {
      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
    }
    ReactComponent.prototype.isReactComponent = {};
    ReactComponent.prototype.setState = function (partialState, callback) {
      !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? 'production' !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
      this.updater.enqueueSetState(this, partialState);
      if (callback) {
        this.updater.enqueueCallback(this, callback, 'setState');
      }
    };
    ReactComponent.prototype.forceUpdate = function (callback) {
      this.updater.enqueueForceUpdate(this);
      if (callback) {
        this.updater.enqueueCallback(this, callback, 'forceUpdate');
      }
    };
    if ('production' !== 'production') {
      var deprecatedAPIs = {
        isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
        replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
      };
      var defineDeprecationWarning = function (methodName, info) {
        if (canDefineProperty) {
          Object.defineProperty(ReactComponent.prototype, methodName, { get: function () {
              'production' !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
              return undefined;
            } });
        }
      };
      for (var fnName in deprecatedAPIs) {
        if (deprecatedAPIs.hasOwnProperty(fnName)) {
          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
        }
      }
    }
    module.exports = ReactComponent;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react@15.4.2/lib/ReactNoopUpdateQueue.js', ['npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    function warnNoop(publicInstance, callerName) {
      if ('production' !== 'production') {
        var constructor = publicInstance.constructor;
        'production' !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
      }
    }
    var ReactNoopUpdateQueue = {
      isMounted: function (publicInstance) {
        return false;
      },
      enqueueCallback: function (publicInstance, callback) {},
      enqueueForceUpdate: function (publicInstance) {
        warnNoop(publicInstance, 'forceUpdate');
      },
      enqueueReplaceState: function (publicInstance, completeState) {
        warnNoop(publicInstance, 'replaceState');
      },
      enqueueSetState: function (publicInstance, partialState) {
        warnNoop(publicInstance, 'setState');
      }
    };
    module.exports = ReactNoopUpdateQueue;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react@15.4.2/lib/ReactClass.js', ['npm:react@15.4.2/lib/reactProdInvariant.js', 'npm:object-assign@4.1.1.js', 'npm:react@15.4.2/lib/ReactComponent.js', 'npm:react@15.4.2/lib/ReactElement.js', 'npm:react@15.4.2/lib/ReactPropTypeLocationNames.js', 'npm:react@15.4.2/lib/ReactNoopUpdateQueue.js', 'npm:fbjs@0.8.9/lib/emptyObject.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react@15.4.2/lib/reactProdInvariant.js'),
        _assign = $__require('npm:object-assign@4.1.1.js');
    var ReactComponent = $__require('npm:react@15.4.2/lib/ReactComponent.js');
    var ReactElement = $__require('npm:react@15.4.2/lib/ReactElement.js');
    var ReactPropTypeLocationNames = $__require('npm:react@15.4.2/lib/ReactPropTypeLocationNames.js');
    var ReactNoopUpdateQueue = $__require('npm:react@15.4.2/lib/ReactNoopUpdateQueue.js');
    var emptyObject = $__require('npm:fbjs@0.8.9/lib/emptyObject.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var MIXINS_KEY = 'mixins';
    function identity(fn) {
      return fn;
    }
    var injectedMixins = [];
    var ReactClassInterface = {
      mixins: 'DEFINE_MANY',
      statics: 'DEFINE_MANY',
      propTypes: 'DEFINE_MANY',
      contextTypes: 'DEFINE_MANY',
      childContextTypes: 'DEFINE_MANY',
      getDefaultProps: 'DEFINE_MANY_MERGED',
      getInitialState: 'DEFINE_MANY_MERGED',
      getChildContext: 'DEFINE_MANY_MERGED',
      render: 'DEFINE_ONCE',
      componentWillMount: 'DEFINE_MANY',
      componentDidMount: 'DEFINE_MANY',
      componentWillReceiveProps: 'DEFINE_MANY',
      shouldComponentUpdate: 'DEFINE_ONCE',
      componentWillUpdate: 'DEFINE_MANY',
      componentDidUpdate: 'DEFINE_MANY',
      componentWillUnmount: 'DEFINE_MANY',
      updateComponent: 'OVERRIDE_BASE'
    };
    var RESERVED_SPEC_KEYS = {
      displayName: function (Constructor, displayName) {
        Constructor.displayName = displayName;
      },
      mixins: function (Constructor, mixins) {
        if (mixins) {
          for (var i = 0; i < mixins.length; i++) {
            mixSpecIntoComponent(Constructor, mixins[i]);
          }
        }
      },
      childContextTypes: function (Constructor, childContextTypes) {
        if ('production' !== 'production') {
          validateTypeDef(Constructor, childContextTypes, 'childContext');
        }
        Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
      },
      contextTypes: function (Constructor, contextTypes) {
        if ('production' !== 'production') {
          validateTypeDef(Constructor, contextTypes, 'context');
        }
        Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
      },
      getDefaultProps: function (Constructor, getDefaultProps) {
        if (Constructor.getDefaultProps) {
          Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
        } else {
          Constructor.getDefaultProps = getDefaultProps;
        }
      },
      propTypes: function (Constructor, propTypes) {
        if ('production' !== 'production') {
          validateTypeDef(Constructor, propTypes, 'prop');
        }
        Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
      },
      statics: function (Constructor, statics) {
        mixStaticSpecIntoComponent(Constructor, statics);
      },
      autobind: function () {}
    };
    function validateTypeDef(Constructor, typeDef, location) {
      for (var propName in typeDef) {
        if (typeDef.hasOwnProperty(propName)) {
          'production' !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
        }
      }
    }
    function validateMethodOverride(isAlreadyDefined, name) {
      var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;
      if (ReactClassMixin.hasOwnProperty(name)) {
        !(specPolicy === 'OVERRIDE_BASE') ? 'production' !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : _prodInvariant('73', name) : void 0;
      }
      if (isAlreadyDefined) {
        !(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED') ? 'production' !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('74', name) : void 0;
      }
    }
    function mixSpecIntoComponent(Constructor, spec) {
      if (!spec) {
        if ('production' !== 'production') {
          var typeofSpec = typeof spec;
          var isMixinValid = typeofSpec === 'object' && spec !== null;
          'production' !== 'production' ? warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
        }
        return;
      }
      !(typeof spec !== 'function') ? 'production' !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : _prodInvariant('75') : void 0;
      !!ReactElement.isValidElement(spec) ? 'production' !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : _prodInvariant('76') : void 0;
      var proto = Constructor.prototype;
      var autoBindPairs = proto.__reactAutoBindPairs;
      if (spec.hasOwnProperty(MIXINS_KEY)) {
        RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
      }
      for (var name in spec) {
        if (!spec.hasOwnProperty(name)) {
          continue;
        }
        if (name === MIXINS_KEY) {
          continue;
        }
        var property = spec[name];
        var isAlreadyDefined = proto.hasOwnProperty(name);
        validateMethodOverride(isAlreadyDefined, name);
        if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
          RESERVED_SPEC_KEYS[name](Constructor, property);
        } else {
          var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
          var isFunction = typeof property === 'function';
          var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;
          if (shouldAutoBind) {
            autoBindPairs.push(name, property);
            proto[name] = property;
          } else {
            if (isAlreadyDefined) {
              var specPolicy = ReactClassInterface[name];
              !(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY')) ? 'production' !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : _prodInvariant('77', specPolicy, name) : void 0;
              if (specPolicy === 'DEFINE_MANY_MERGED') {
                proto[name] = createMergedResultFunction(proto[name], property);
              } else if (specPolicy === 'DEFINE_MANY') {
                proto[name] = createChainedFunction(proto[name], property);
              }
            } else {
              proto[name] = property;
              if ('production' !== 'production') {
                if (typeof property === 'function' && spec.displayName) {
                  proto[name].displayName = spec.displayName + '_' + name;
                }
              }
            }
          }
        }
      }
    }
    function mixStaticSpecIntoComponent(Constructor, statics) {
      if (!statics) {
        return;
      }
      for (var name in statics) {
        var property = statics[name];
        if (!statics.hasOwnProperty(name)) {
          continue;
        }
        var isReserved = name in RESERVED_SPEC_KEYS;
        !!isReserved ? 'production' !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : _prodInvariant('78', name) : void 0;
        var isInherited = name in Constructor;
        !!isInherited ? 'production' !== 'production' ? invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('79', name) : void 0;
        Constructor[name] = property;
      }
    }
    function mergeIntoWithNoDuplicateKeys(one, two) {
      !(one && two && typeof one === 'object' && typeof two === 'object') ? 'production' !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : _prodInvariant('80') : void 0;
      for (var key in two) {
        if (two.hasOwnProperty(key)) {
          !(one[key] === undefined) ? 'production' !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : _prodInvariant('81', key) : void 0;
          one[key] = two[key];
        }
      }
      return one;
    }
    function createMergedResultFunction(one, two) {
      return function mergedResult() {
        var a = one.apply(this, arguments);
        var b = two.apply(this, arguments);
        if (a == null) {
          return b;
        } else if (b == null) {
          return a;
        }
        var c = {};
        mergeIntoWithNoDuplicateKeys(c, a);
        mergeIntoWithNoDuplicateKeys(c, b);
        return c;
      };
    }
    function createChainedFunction(one, two) {
      return function chainedFunction() {
        one.apply(this, arguments);
        two.apply(this, arguments);
      };
    }
    function bindAutoBindMethod(component, method) {
      var boundMethod = method.bind(component);
      if ('production' !== 'production') {
        boundMethod.__reactBoundContext = component;
        boundMethod.__reactBoundMethod = method;
        boundMethod.__reactBoundArguments = null;
        var componentName = component.constructor.displayName;
        var _bind = boundMethod.bind;
        boundMethod.bind = function (newThis) {
          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          if (newThis !== component && newThis !== null) {
            'production' !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
          } else if (!args.length) {
            'production' !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
            return boundMethod;
          }
          var reboundMethod = _bind.apply(boundMethod, arguments);
          reboundMethod.__reactBoundContext = component;
          reboundMethod.__reactBoundMethod = method;
          reboundMethod.__reactBoundArguments = args;
          return reboundMethod;
        };
      }
      return boundMethod;
    }
    function bindAutoBindMethods(component) {
      var pairs = component.__reactAutoBindPairs;
      for (var i = 0; i < pairs.length; i += 2) {
        var autoBindKey = pairs[i];
        var method = pairs[i + 1];
        component[autoBindKey] = bindAutoBindMethod(component, method);
      }
    }
    var ReactClassMixin = {
      replaceState: function (newState, callback) {
        this.updater.enqueueReplaceState(this, newState);
        if (callback) {
          this.updater.enqueueCallback(this, callback, 'replaceState');
        }
      },
      isMounted: function () {
        return this.updater.isMounted(this);
      }
    };
    var ReactClassComponent = function () {};
    _assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);
    var ReactClass = {
      createClass: function (spec) {
        var Constructor = identity(function (props, context, updater) {
          if ('production' !== 'production') {
            'production' !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
          }
          if (this.__reactAutoBindPairs.length) {
            bindAutoBindMethods(this);
          }
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
          this.state = null;
          var initialState = this.getInitialState ? this.getInitialState() : null;
          if ('production' !== 'production') {
            if (initialState === undefined && this.getInitialState._isMockFunction) {
              initialState = null;
            }
          }
          !(typeof initialState === 'object' && !Array.isArray(initialState)) ? 'production' !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;
          this.state = initialState;
        });
        Constructor.prototype = new ReactClassComponent();
        Constructor.prototype.constructor = Constructor;
        Constructor.prototype.__reactAutoBindPairs = [];
        injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
        mixSpecIntoComponent(Constructor, spec);
        if (Constructor.getDefaultProps) {
          Constructor.defaultProps = Constructor.getDefaultProps();
        }
        if ('production' !== 'production') {
          if (Constructor.getDefaultProps) {
            Constructor.getDefaultProps.isReactClassApproved = {};
          }
          if (Constructor.prototype.getInitialState) {
            Constructor.prototype.getInitialState.isReactClassApproved = {};
          }
        }
        !Constructor.prototype.render ? 'production' !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : _prodInvariant('83') : void 0;
        if ('production' !== 'production') {
          'production' !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
          'production' !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
        }
        for (var methodName in ReactClassInterface) {
          if (!Constructor.prototype[methodName]) {
            Constructor.prototype[methodName] = null;
          }
        }
        return Constructor;
      },
      injection: { injectMixin: function (mixin) {
          injectedMixins.push(mixin);
        } }
    };
    module.exports = ReactClass;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react@15.4.2/lib/ReactDOMFactories.js', ['npm:react@15.4.2/lib/ReactElement.js', 'npm:react@15.4.2/lib/ReactElementValidator.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var ReactElement = $__require('npm:react@15.4.2/lib/ReactElement.js');
    var createDOMFactory = ReactElement.createFactory;
    if ('production' !== 'production') {
      var ReactElementValidator = $__require('npm:react@15.4.2/lib/ReactElementValidator.js');
      createDOMFactory = ReactElementValidator.createFactory;
    }
    var ReactDOMFactories = {
      a: createDOMFactory('a'),
      abbr: createDOMFactory('abbr'),
      address: createDOMFactory('address'),
      area: createDOMFactory('area'),
      article: createDOMFactory('article'),
      aside: createDOMFactory('aside'),
      audio: createDOMFactory('audio'),
      b: createDOMFactory('b'),
      base: createDOMFactory('base'),
      bdi: createDOMFactory('bdi'),
      bdo: createDOMFactory('bdo'),
      big: createDOMFactory('big'),
      blockquote: createDOMFactory('blockquote'),
      body: createDOMFactory('body'),
      br: createDOMFactory('br'),
      button: createDOMFactory('button'),
      canvas: createDOMFactory('canvas'),
      caption: createDOMFactory('caption'),
      cite: createDOMFactory('cite'),
      code: createDOMFactory('code'),
      col: createDOMFactory('col'),
      colgroup: createDOMFactory('colgroup'),
      data: createDOMFactory('data'),
      datalist: createDOMFactory('datalist'),
      dd: createDOMFactory('dd'),
      del: createDOMFactory('del'),
      details: createDOMFactory('details'),
      dfn: createDOMFactory('dfn'),
      dialog: createDOMFactory('dialog'),
      div: createDOMFactory('div'),
      dl: createDOMFactory('dl'),
      dt: createDOMFactory('dt'),
      em: createDOMFactory('em'),
      embed: createDOMFactory('embed'),
      fieldset: createDOMFactory('fieldset'),
      figcaption: createDOMFactory('figcaption'),
      figure: createDOMFactory('figure'),
      footer: createDOMFactory('footer'),
      form: createDOMFactory('form'),
      h1: createDOMFactory('h1'),
      h2: createDOMFactory('h2'),
      h3: createDOMFactory('h3'),
      h4: createDOMFactory('h4'),
      h5: createDOMFactory('h5'),
      h6: createDOMFactory('h6'),
      head: createDOMFactory('head'),
      header: createDOMFactory('header'),
      hgroup: createDOMFactory('hgroup'),
      hr: createDOMFactory('hr'),
      html: createDOMFactory('html'),
      i: createDOMFactory('i'),
      iframe: createDOMFactory('iframe'),
      img: createDOMFactory('img'),
      input: createDOMFactory('input'),
      ins: createDOMFactory('ins'),
      kbd: createDOMFactory('kbd'),
      keygen: createDOMFactory('keygen'),
      label: createDOMFactory('label'),
      legend: createDOMFactory('legend'),
      li: createDOMFactory('li'),
      link: createDOMFactory('link'),
      main: createDOMFactory('main'),
      map: createDOMFactory('map'),
      mark: createDOMFactory('mark'),
      menu: createDOMFactory('menu'),
      menuitem: createDOMFactory('menuitem'),
      meta: createDOMFactory('meta'),
      meter: createDOMFactory('meter'),
      nav: createDOMFactory('nav'),
      noscript: createDOMFactory('noscript'),
      object: createDOMFactory('object'),
      ol: createDOMFactory('ol'),
      optgroup: createDOMFactory('optgroup'),
      option: createDOMFactory('option'),
      output: createDOMFactory('output'),
      p: createDOMFactory('p'),
      param: createDOMFactory('param'),
      picture: createDOMFactory('picture'),
      pre: createDOMFactory('pre'),
      progress: createDOMFactory('progress'),
      q: createDOMFactory('q'),
      rp: createDOMFactory('rp'),
      rt: createDOMFactory('rt'),
      ruby: createDOMFactory('ruby'),
      s: createDOMFactory('s'),
      samp: createDOMFactory('samp'),
      script: createDOMFactory('script'),
      section: createDOMFactory('section'),
      select: createDOMFactory('select'),
      small: createDOMFactory('small'),
      source: createDOMFactory('source'),
      span: createDOMFactory('span'),
      strong: createDOMFactory('strong'),
      style: createDOMFactory('style'),
      sub: createDOMFactory('sub'),
      summary: createDOMFactory('summary'),
      sup: createDOMFactory('sup'),
      table: createDOMFactory('table'),
      tbody: createDOMFactory('tbody'),
      td: createDOMFactory('td'),
      textarea: createDOMFactory('textarea'),
      tfoot: createDOMFactory('tfoot'),
      th: createDOMFactory('th'),
      thead: createDOMFactory('thead'),
      time: createDOMFactory('time'),
      title: createDOMFactory('title'),
      tr: createDOMFactory('tr'),
      track: createDOMFactory('track'),
      u: createDOMFactory('u'),
      ul: createDOMFactory('ul'),
      'var': createDOMFactory('var'),
      video: createDOMFactory('video'),
      wbr: createDOMFactory('wbr'),
      circle: createDOMFactory('circle'),
      clipPath: createDOMFactory('clipPath'),
      defs: createDOMFactory('defs'),
      ellipse: createDOMFactory('ellipse'),
      g: createDOMFactory('g'),
      image: createDOMFactory('image'),
      line: createDOMFactory('line'),
      linearGradient: createDOMFactory('linearGradient'),
      mask: createDOMFactory('mask'),
      path: createDOMFactory('path'),
      pattern: createDOMFactory('pattern'),
      polygon: createDOMFactory('polygon'),
      polyline: createDOMFactory('polyline'),
      radialGradient: createDOMFactory('radialGradient'),
      rect: createDOMFactory('rect'),
      stop: createDOMFactory('stop'),
      svg: createDOMFactory('svg'),
      text: createDOMFactory('text'),
      tspan: createDOMFactory('tspan')
    };
    module.exports = ReactDOMFactories;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react@15.4.2/lib/ReactPropTypes.js', ['npm:react@15.4.2/lib/ReactElement.js', 'npm:react@15.4.2/lib/ReactPropTypeLocationNames.js', 'npm:react@15.4.2/lib/ReactPropTypesSecret.js', 'npm:fbjs@0.8.9/lib/emptyFunction.js', 'npm:react@15.4.2/lib/getIteratorFn.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var ReactElement = $__require('npm:react@15.4.2/lib/ReactElement.js');
    var ReactPropTypeLocationNames = $__require('npm:react@15.4.2/lib/ReactPropTypeLocationNames.js');
    var ReactPropTypesSecret = $__require('npm:react@15.4.2/lib/ReactPropTypesSecret.js');
    var emptyFunction = $__require('npm:fbjs@0.8.9/lib/emptyFunction.js');
    var getIteratorFn = $__require('npm:react@15.4.2/lib/getIteratorFn.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var ANONYMOUS = '<<anonymous>>';
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),
      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker
    };
    function is(x, y) {
      if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
      } else {
        return x !== x && y !== y;
      }
    }
    function PropTypeError(message) {
      this.message = message;
      this.stack = '';
    }
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
      if ('production' !== 'production') {
        var manualPropTypeCallCache = {};
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;
        if ('production' !== 'production') {
          if (secret !== ReactPropTypesSecret && typeof console !== 'undefined') {
            var cacheKey = componentName + ':' + propName;
            if (!manualPropTypeCallCache[cacheKey]) {
              'production' !== 'production' ? warning(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will not work in production with the next major version. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName) : void 0;
              manualPropTypeCallCache[cacheKey] = true;
            }
          }
        }
        if (props[propName] == null) {
          var locationName = ReactPropTypeLocationNames[location];
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + locationName + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + locationName + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }
      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          var locationName = ReactPropTypeLocationNames[location];
          var preciseType = getPreciseType(propValue);
          return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunction.thatReturns(null));
    }
    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var locationName = ReactPropTypeLocationNames[location];
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!ReactElement.isValidElement(propValue)) {
          var locationName = ReactPropTypeLocationNames[location];
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var locationName = ReactPropTypeLocationNames[location];
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        'production' !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
        return emptyFunction.thatReturnsNull;
      }
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }
        var locationName = ReactPropTypeLocationNames[location];
        var valuesString = JSON.stringify(expectedValues);
        return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          var locationName = ReactPropTypeLocationNames[location];
          return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (propValue.hasOwnProperty(key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        'production' !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
        return emptyFunction.thatReturnsNull;
      }
      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
            return null;
          }
        }
        var locationName = ReactPropTypeLocationNames[location];
        return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
      }
      return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          var locationName = ReactPropTypeLocationNames[location];
          return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          var locationName = ReactPropTypeLocationNames[location];
          return new PropTypeError('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (!checker) {
            continue;
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || ReactElement.isValidElement(propValue)) {
            return true;
          }
          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }
          return true;
        default:
          return false;
      }
    }
    function isSymbol(propType, propValue) {
      if (propType === 'symbol') {
        return true;
      }
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }
      return false;
    }
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }
    function getPreciseType(propValue) {
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }
    module.exports = ReactPropTypes;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react@15.4.2/lib/ReactVersion.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  module.exports = '15.4.2';
});
System.registerDynamic('npm:react@15.4.2/lib/onlyChild.js', ['npm:react@15.4.2/lib/reactProdInvariant.js', 'npm:react@15.4.2/lib/ReactElement.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react@15.4.2/lib/reactProdInvariant.js');
    var ReactElement = $__require('npm:react@15.4.2/lib/ReactElement.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    function onlyChild(children) {
      !ReactElement.isValidElement(children) ? 'production' !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
      return children;
    }
    module.exports = onlyChild;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:object-assign@4.1.1/index.js', [], true, function ($__require, exports, module) {
	/*
 object-assign
 (c) Sindre Sorhus
 @license MIT
 */

	'use strict';
	/* eslint-disable no-unused-vars */

	var global = this || self,
	    GLOBAL = global;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
});
System.registerDynamic("npm:object-assign@4.1.1.js", ["npm:object-assign@4.1.1/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:object-assign@4.1.1/index.js");
});
System.registerDynamic('npm:react@15.4.2/lib/ReactElementSymbol.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2014-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */

  'use strict';

  // The Symbol used to tag the ReactElement type. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.

  var global = this || self,
      GLOBAL = global;
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

  module.exports = REACT_ELEMENT_TYPE;
});
System.registerDynamic('npm:react@15.4.2/lib/ReactElement.js', ['npm:object-assign@4.1.1.js', 'npm:react@15.4.2/lib/ReactCurrentOwner.js', 'npm:fbjs@0.8.9/lib/warning.js', 'npm:react@15.4.2/lib/canDefineProperty.js', 'npm:react@15.4.2/lib/ReactElementSymbol.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _assign = $__require('npm:object-assign@4.1.1.js');
    var ReactCurrentOwner = $__require('npm:react@15.4.2/lib/ReactCurrentOwner.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var canDefineProperty = $__require('npm:react@15.4.2/lib/canDefineProperty.js');
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var REACT_ELEMENT_TYPE = $__require('npm:react@15.4.2/lib/ReactElementSymbol.js');
    var RESERVED_PROPS = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    var specialPropKeyWarningShown, specialPropRefWarningShown;
    function hasValidRef(config) {
      if ('production' !== 'production') {
        if (hasOwnProperty.call(config, 'ref')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.ref !== undefined;
    }
    function hasValidKey(config) {
      if ('production' !== 'production') {
        if (hasOwnProperty.call(config, 'key')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
      var warnAboutAccessingKey = function () {
        if (!specialPropKeyWarningShown) {
          specialPropKeyWarningShown = true;
          'production' !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
        }
      };
      warnAboutAccessingKey.isReactWarning = true;
      Object.defineProperty(props, 'key', {
        get: warnAboutAccessingKey,
        configurable: true
      });
    }
    function defineRefPropWarningGetter(props, displayName) {
      var warnAboutAccessingRef = function () {
        if (!specialPropRefWarningShown) {
          specialPropRefWarningShown = true;
          'production' !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
        }
      };
      warnAboutAccessingRef.isReactWarning = true;
      Object.defineProperty(props, 'ref', {
        get: warnAboutAccessingRef,
        configurable: true
      });
    }
    var ReactElement = function (type, key, ref, self, source, owner, props) {
      var element = {
        $$typeof: REACT_ELEMENT_TYPE,
        type: type,
        key: key,
        ref: ref,
        props: props,
        _owner: owner
      };
      if ('production' !== 'production') {
        element._store = {};
        if (canDefineProperty) {
          Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
          });
          Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
          });
          Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
          });
        } else {
          element._store.validated = false;
          element._self = self;
          element._source = source;
        }
        if (Object.freeze) {
          Object.freeze(element.props);
          Object.freeze(element);
        }
      }
      return element;
    };
    ReactElement.createElement = function (type, config, children) {
      var propName;
      var props = {};
      var key = null;
      var ref = null;
      var self = null;
      var source = null;
      if (config != null) {
        if (hasValidRef(config)) {
          ref = config.ref;
        }
        if (hasValidKey(config)) {
          key = '' + config.key;
        }
        self = config.__self === undefined ? null : config.__self;
        source = config.__source === undefined ? null : config.__source;
        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
      }
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }
        if ('production' !== 'production') {
          if (Object.freeze) {
            Object.freeze(childArray);
          }
        }
        props.children = childArray;
      }
      if (type && type.defaultProps) {
        var defaultProps = type.defaultProps;
        for (propName in defaultProps) {
          if (props[propName] === undefined) {
            props[propName] = defaultProps[propName];
          }
        }
      }
      if ('production' !== 'production') {
        if (key || ref) {
          if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }
            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }
        }
      }
      return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    };
    ReactElement.createFactory = function (type) {
      var factory = ReactElement.createElement.bind(null, type);
      factory.type = type;
      return factory;
    };
    ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
      var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
      return newElement;
    };
    ReactElement.cloneElement = function (element, config, children) {
      var propName;
      var props = _assign({}, element.props);
      var key = element.key;
      var ref = element.ref;
      var self = element._self;
      var source = element._source;
      var owner = element._owner;
      if (config != null) {
        if (hasValidRef(config)) {
          ref = config.ref;
          owner = ReactCurrentOwner.current;
        }
        if (hasValidKey(config)) {
          key = '' + config.key;
        }
        var defaultProps;
        if (element.type && element.type.defaultProps) {
          defaultProps = element.type.defaultProps;
        }
        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            if (config[propName] === undefined && defaultProps !== undefined) {
              props[propName] = defaultProps[propName];
            } else {
              props[propName] = config[propName];
            }
          }
        }
      }
      var childrenLength = arguments.length - 2;
      if (childrenLength === 1) {
        props.children = children;
      } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
          childArray[i] = arguments[i + 2];
        }
        props.children = childArray;
      }
      return ReactElement(element.type, key, ref, self, source, owner, props);
    };
    ReactElement.isValidElement = function (object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    };
    module.exports = ReactElement;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react@15.4.2/lib/ReactPropTypeLocationNames.js', ['github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var ReactPropTypeLocationNames = {};
    if ('production' !== 'production') {
      ReactPropTypeLocationNames = {
        prop: 'prop',
        context: 'context',
        childContext: 'child context'
      };
    }
    module.exports = ReactPropTypeLocationNames;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react@15.4.2/lib/ReactPropTypesSecret.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  module.exports = ReactPropTypesSecret;
});
System.registerDynamic('npm:react@15.4.2/lib/checkReactTypeSpec.js', ['npm:react@15.4.2/lib/reactProdInvariant.js', 'npm:react@15.4.2/lib/ReactPropTypeLocationNames.js', 'npm:react@15.4.2/lib/ReactPropTypesSecret.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'npm:fbjs@0.8.9/lib/warning.js', 'npm:react@15.4.2/lib/ReactComponentTreeHook.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react@15.4.2/lib/reactProdInvariant.js');
    var ReactPropTypeLocationNames = $__require('npm:react@15.4.2/lib/ReactPropTypeLocationNames.js');
    var ReactPropTypesSecret = $__require('npm:react@15.4.2/lib/ReactPropTypesSecret.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var ReactComponentTreeHook;
    if (typeof process !== 'undefined' && process.env && 'production' === 'test') {
      ReactComponentTreeHook = $__require('npm:react@15.4.2/lib/ReactComponentTreeHook.js');
    }
    var loggedTypeFailures = {};
    function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
      for (var typeSpecName in typeSpecs) {
        if (typeSpecs.hasOwnProperty(typeSpecName)) {
          var error;
          try {
            !(typeof typeSpecs[typeSpecName] === 'function') ? 'production' !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          'production' !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            loggedTypeFailures[error.message] = true;
            var componentStackInfo = '';
            if ('production' !== 'production') {
              if (!ReactComponentTreeHook) {
                ReactComponentTreeHook = $__require('npm:react@15.4.2/lib/ReactComponentTreeHook.js');
              }
              if (debugID !== null) {
                componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
              } else if (element !== null) {
                componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
              }
            }
            'production' !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
          }
        }
      }
    }
    module.exports = checkReactTypeSpec;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react@15.4.2/lib/canDefineProperty.js', ['github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var canDefineProperty = false;
    if ('production' !== 'production') {
      try {
        Object.defineProperty({}, 'x', { get: function () {} });
        canDefineProperty = true;
      } catch (x) {}
    }
    module.exports = canDefineProperty;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react@15.4.2/lib/getIteratorFn.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */

  'use strict';

  /* global Symbol */

  var global = this || self,
      GLOBAL = global;
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  module.exports = getIteratorFn;
});
System.registerDynamic('npm:react@15.4.2/lib/ReactElementValidator.js', ['npm:react@15.4.2/lib/ReactCurrentOwner.js', 'npm:react@15.4.2/lib/ReactComponentTreeHook.js', 'npm:react@15.4.2/lib/ReactElement.js', 'npm:react@15.4.2/lib/checkReactTypeSpec.js', 'npm:react@15.4.2/lib/canDefineProperty.js', 'npm:react@15.4.2/lib/getIteratorFn.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var ReactCurrentOwner = $__require('npm:react@15.4.2/lib/ReactCurrentOwner.js');
    var ReactComponentTreeHook = $__require('npm:react@15.4.2/lib/ReactComponentTreeHook.js');
    var ReactElement = $__require('npm:react@15.4.2/lib/ReactElement.js');
    var checkReactTypeSpec = $__require('npm:react@15.4.2/lib/checkReactTypeSpec.js');
    var canDefineProperty = $__require('npm:react@15.4.2/lib/canDefineProperty.js');
    var getIteratorFn = $__require('npm:react@15.4.2/lib/getIteratorFn.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    function getDeclarationErrorAddendum() {
      if (ReactCurrentOwner.current) {
        var name = ReactCurrentOwner.current.getName();
        if (name) {
          return ' Check the render method of `' + name + '`.';
        }
      }
      return '';
    }
    var ownerHasKeyUseWarning = {};
    function getCurrentComponentErrorInfo(parentType) {
      var info = getDeclarationErrorAddendum();
      if (!info) {
        var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
        if (parentName) {
          info = ' Check the top-level render call using <' + parentName + '>.';
        }
      }
      return info;
    }
    function validateExplicitKey(element, parentType) {
      if (!element._store || element._store.validated || element.key != null) {
        return;
      }
      element._store.validated = true;
      var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});
      var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
      if (memoizer[currentComponentErrorInfo]) {
        return;
      }
      memoizer[currentComponentErrorInfo] = true;
      var childOwner = '';
      if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
        childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
      }
      'production' !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
    }
    function validateChildKeys(node, parentType) {
      if (typeof node !== 'object') {
        return;
      }
      if (Array.isArray(node)) {
        for (var i = 0; i < node.length; i++) {
          var child = node[i];
          if (ReactElement.isValidElement(child)) {
            validateExplicitKey(child, parentType);
          }
        }
      } else if (ReactElement.isValidElement(node)) {
        if (node._store) {
          node._store.validated = true;
        }
      } else if (node) {
        var iteratorFn = getIteratorFn(node);
        if (iteratorFn) {
          if (iteratorFn !== node.entries) {
            var iterator = iteratorFn.call(node);
            var step;
            while (!(step = iterator.next()).done) {
              if (ReactElement.isValidElement(step.value)) {
                validateExplicitKey(step.value, parentType);
              }
            }
          }
        }
      }
    }
    function validatePropTypes(element) {
      var componentClass = element.type;
      if (typeof componentClass !== 'function') {
        return;
      }
      var name = componentClass.displayName || componentClass.name;
      if (componentClass.propTypes) {
        checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
      }
      if (typeof componentClass.getDefaultProps === 'function') {
        'production' !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
      }
    }
    var ReactElementValidator = {
      createElement: function (type, props, children) {
        var validType = typeof type === 'string' || typeof type === 'function';
        if (!validType) {
          if (typeof type !== 'function' && typeof type !== 'string') {
            var info = '';
            if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
              info += ' You likely forgot to export your component from the file ' + 'it\'s defined in.';
            }
            info += getDeclarationErrorAddendum();
            'production' !== 'production' ? warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info) : void 0;
          }
        }
        var element = ReactElement.createElement.apply(this, arguments);
        if (element == null) {
          return element;
        }
        if (validType) {
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], type);
          }
        }
        validatePropTypes(element);
        return element;
      },
      createFactory: function (type) {
        var validatedFactory = ReactElementValidator.createElement.bind(null, type);
        validatedFactory.type = type;
        if ('production' !== 'production') {
          if (canDefineProperty) {
            Object.defineProperty(validatedFactory, 'type', {
              enumerable: false,
              get: function () {
                'production' !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
                Object.defineProperty(this, 'type', { value: type });
                return type;
              }
            });
          }
        }
        return validatedFactory;
      },
      cloneElement: function (element, props, children) {
        var newElement = ReactElement.cloneElement.apply(this, arguments);
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], newElement.type);
        }
        validatePropTypes(newElement);
        return newElement;
      }
    };
    module.exports = ReactElementValidator;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react@15.4.2/lib/React.js', ['npm:object-assign@4.1.1.js', 'npm:react@15.4.2/lib/ReactChildren.js', 'npm:react@15.4.2/lib/ReactComponent.js', 'npm:react@15.4.2/lib/ReactPureComponent.js', 'npm:react@15.4.2/lib/ReactClass.js', 'npm:react@15.4.2/lib/ReactDOMFactories.js', 'npm:react@15.4.2/lib/ReactElement.js', 'npm:react@15.4.2/lib/ReactPropTypes.js', 'npm:react@15.4.2/lib/ReactVersion.js', 'npm:react@15.4.2/lib/onlyChild.js', 'npm:fbjs@0.8.9/lib/warning.js', 'npm:react@15.4.2/lib/ReactElementValidator.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _assign = $__require('npm:object-assign@4.1.1.js');
    var ReactChildren = $__require('npm:react@15.4.2/lib/ReactChildren.js');
    var ReactComponent = $__require('npm:react@15.4.2/lib/ReactComponent.js');
    var ReactPureComponent = $__require('npm:react@15.4.2/lib/ReactPureComponent.js');
    var ReactClass = $__require('npm:react@15.4.2/lib/ReactClass.js');
    var ReactDOMFactories = $__require('npm:react@15.4.2/lib/ReactDOMFactories.js');
    var ReactElement = $__require('npm:react@15.4.2/lib/ReactElement.js');
    var ReactPropTypes = $__require('npm:react@15.4.2/lib/ReactPropTypes.js');
    var ReactVersion = $__require('npm:react@15.4.2/lib/ReactVersion.js');
    var onlyChild = $__require('npm:react@15.4.2/lib/onlyChild.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var createElement = ReactElement.createElement;
    var createFactory = ReactElement.createFactory;
    var cloneElement = ReactElement.cloneElement;
    if ('production' !== 'production') {
      var ReactElementValidator = $__require('npm:react@15.4.2/lib/ReactElementValidator.js');
      createElement = ReactElementValidator.createElement;
      createFactory = ReactElementValidator.createFactory;
      cloneElement = ReactElementValidator.cloneElement;
    }
    var __spread = _assign;
    if ('production' !== 'production') {
      var warned = false;
      __spread = function () {
        'production' !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
        warned = true;
        return _assign.apply(null, arguments);
      };
    }
    var React = {
      Children: {
        map: ReactChildren.map,
        forEach: ReactChildren.forEach,
        count: ReactChildren.count,
        toArray: ReactChildren.toArray,
        only: onlyChild
      },
      Component: ReactComponent,
      PureComponent: ReactPureComponent,
      createElement: createElement,
      cloneElement: cloneElement,
      isValidElement: ReactElement.isValidElement,
      PropTypes: ReactPropTypes,
      createClass: ReactClass.createClass,
      createFactory: createFactory,
      createMixin: function (mixin) {
        return mixin;
      },
      DOM: ReactDOMFactories,
      version: ReactVersion,
      __spread: __spread
    };
    module.exports = React;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactNodeTypes.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:react@15.4.2/lib/React.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    var React = $__require('npm:react@15.4.2/lib/React.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var ReactNodeTypes = {
      HOST: 0,
      COMPOSITE: 1,
      EMPTY: 2,
      getType: function (node) {
        if (node === null || node === false) {
          return ReactNodeTypes.EMPTY;
        } else if (React.isValidElement(node)) {
          if (typeof node.type === 'function') {
            return ReactNodeTypes.COMPOSITE;
          } else {
            return ReactNodeTypes.HOST;
          }
        }
        !false ? 'production' !== 'production' ? invariant(false, 'Unexpected node: %s', node) : _prodInvariant('26', node) : void 0;
      }
    };
    module.exports = ReactNodeTypes;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactOwner.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    function isValidOwner(object) {
      return !!(object && typeof object.attachRef === 'function' && typeof object.detachRef === 'function');
    }
    var ReactOwner = {
      addComponentAsRefTo: function (component, ref, owner) {
        !isValidOwner(owner) ? 'production' !== 'production' ? invariant(false, 'addComponentAsRefTo(...): Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component\'s `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).') : _prodInvariant('119') : void 0;
        owner.attachRef(ref, component);
      },
      removeComponentAsRefFrom: function (component, ref, owner) {
        !isValidOwner(owner) ? 'production' !== 'production' ? invariant(false, 'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might be removing a ref to a component that was not created inside a component\'s `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).') : _prodInvariant('120') : void 0;
        var ownerPublicInstance = owner.getPublicInstance();
        if (ownerPublicInstance && ownerPublicInstance.refs[ref] === component.getPublicInstance()) {
          owner.detachRef(ref);
        }
      }
    };
    module.exports = ReactOwner;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactRef.js', ['npm:react-dom@15.4.2/lib/ReactOwner.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var ReactOwner = $__require('npm:react-dom@15.4.2/lib/ReactOwner.js');
    var ReactRef = {};
    function attachRef(ref, component, owner) {
      if (typeof ref === 'function') {
        ref(component.getPublicInstance());
      } else {
        ReactOwner.addComponentAsRefTo(component, ref, owner);
      }
    }
    function detachRef(ref, component, owner) {
      if (typeof ref === 'function') {
        ref(null);
      } else {
        ReactOwner.removeComponentAsRefFrom(component, ref, owner);
      }
    }
    ReactRef.attachRefs = function (instance, element) {
      if (element === null || typeof element !== 'object') {
        return;
      }
      var ref = element.ref;
      if (ref != null) {
        attachRef(ref, instance, element._owner);
      }
    };
    ReactRef.shouldUpdateRefs = function (prevElement, nextElement) {
      var prevRef = null;
      var prevOwner = null;
      if (prevElement !== null && typeof prevElement === 'object') {
        prevRef = prevElement.ref;
        prevOwner = prevElement._owner;
      }
      var nextRef = null;
      var nextOwner = null;
      if (nextElement !== null && typeof nextElement === 'object') {
        nextRef = nextElement.ref;
        nextOwner = nextElement._owner;
      }
      return prevRef !== nextRef || typeof nextRef === 'string' && nextOwner !== prevOwner;
    };
    ReactRef.detachRefs = function (instance, element) {
      if (element === null || typeof element !== 'object') {
        return;
      }
      var ref = element.ref;
      if (ref != null) {
        detachRef(ref, instance, element._owner);
      }
    };
    module.exports = ReactRef;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactReconciler.js', ['npm:react-dom@15.4.2/lib/ReactRef.js', 'npm:react-dom@15.4.2/lib/ReactInstrumentation.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var ReactRef = $__require('npm:react-dom@15.4.2/lib/ReactRef.js');
    var ReactInstrumentation = $__require('npm:react-dom@15.4.2/lib/ReactInstrumentation.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    function attachRefs() {
      ReactRef.attachRefs(this, this._currentElement);
    }
    var ReactReconciler = {
      mountComponent: function (internalInstance, transaction, hostParent, hostContainerInfo, context, parentDebugID) {
        if ('production' !== 'production') {
          if (internalInstance._debugID !== 0) {
            ReactInstrumentation.debugTool.onBeforeMountComponent(internalInstance._debugID, internalInstance._currentElement, parentDebugID);
          }
        }
        var markup = internalInstance.mountComponent(transaction, hostParent, hostContainerInfo, context, parentDebugID);
        if (internalInstance._currentElement && internalInstance._currentElement.ref != null) {
          transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
        }
        if ('production' !== 'production') {
          if (internalInstance._debugID !== 0) {
            ReactInstrumentation.debugTool.onMountComponent(internalInstance._debugID);
          }
        }
        return markup;
      },
      getHostNode: function (internalInstance) {
        return internalInstance.getHostNode();
      },
      unmountComponent: function (internalInstance, safely) {
        if ('production' !== 'production') {
          if (internalInstance._debugID !== 0) {
            ReactInstrumentation.debugTool.onBeforeUnmountComponent(internalInstance._debugID);
          }
        }
        ReactRef.detachRefs(internalInstance, internalInstance._currentElement);
        internalInstance.unmountComponent(safely);
        if ('production' !== 'production') {
          if (internalInstance._debugID !== 0) {
            ReactInstrumentation.debugTool.onUnmountComponent(internalInstance._debugID);
          }
        }
      },
      receiveComponent: function (internalInstance, nextElement, transaction, context) {
        var prevElement = internalInstance._currentElement;
        if (nextElement === prevElement && context === internalInstance._context) {
          return;
        }
        if ('production' !== 'production') {
          if (internalInstance._debugID !== 0) {
            ReactInstrumentation.debugTool.onBeforeUpdateComponent(internalInstance._debugID, nextElement);
          }
        }
        var refsChanged = ReactRef.shouldUpdateRefs(prevElement, nextElement);
        if (refsChanged) {
          ReactRef.detachRefs(internalInstance, prevElement);
        }
        internalInstance.receiveComponent(nextElement, transaction, context);
        if (refsChanged && internalInstance._currentElement && internalInstance._currentElement.ref != null) {
          transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
        }
        if ('production' !== 'production') {
          if (internalInstance._debugID !== 0) {
            ReactInstrumentation.debugTool.onUpdateComponent(internalInstance._debugID);
          }
        }
      },
      performUpdateIfNecessary: function (internalInstance, transaction, updateBatchNumber) {
        if (internalInstance._updateBatchNumber !== updateBatchNumber) {
          'production' !== 'production' ? warning(internalInstance._updateBatchNumber == null || internalInstance._updateBatchNumber === updateBatchNumber + 1, 'performUpdateIfNecessary: Unexpected batch number (current %s, ' + 'pending %s)', updateBatchNumber, internalInstance._updateBatchNumber) : void 0;
          return;
        }
        if ('production' !== 'production') {
          if (internalInstance._debugID !== 0) {
            ReactInstrumentation.debugTool.onBeforeUpdateComponent(internalInstance._debugID, internalInstance._currentElement);
          }
        }
        internalInstance.performUpdateIfNecessary(transaction);
        if ('production' !== 'production') {
          if (internalInstance._debugID !== 0) {
            ReactInstrumentation.debugTool.onUpdateComponent(internalInstance._debugID);
          }
        }
      }
    };
    module.exports = ReactReconciler;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactPropTypeLocationNames.js', ['github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var ReactPropTypeLocationNames = {};
    if ('production' !== 'production') {
      ReactPropTypeLocationNames = {
        prop: 'prop',
        context: 'context',
        childContext: 'child context'
      };
    }
    module.exports = ReactPropTypeLocationNames;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactPropTypesSecret.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  module.exports = ReactPropTypesSecret;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/checkReactTypeSpec.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:react-dom@15.4.2/lib/ReactPropTypeLocationNames.js', 'npm:react-dom@15.4.2/lib/ReactPropTypesSecret.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'npm:fbjs@0.8.9/lib/warning.js', 'npm:react@15.4.2/lib/ReactComponentTreeHook.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    var ReactPropTypeLocationNames = $__require('npm:react-dom@15.4.2/lib/ReactPropTypeLocationNames.js');
    var ReactPropTypesSecret = $__require('npm:react-dom@15.4.2/lib/ReactPropTypesSecret.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var ReactComponentTreeHook;
    if (typeof process !== 'undefined' && process.env && 'production' === 'test') {
      ReactComponentTreeHook = $__require('npm:react@15.4.2/lib/ReactComponentTreeHook.js');
    }
    var loggedTypeFailures = {};
    function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
      for (var typeSpecName in typeSpecs) {
        if (typeSpecs.hasOwnProperty(typeSpecName)) {
          var error;
          try {
            !(typeof typeSpecs[typeSpecName] === 'function') ? 'production' !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          'production' !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            loggedTypeFailures[error.message] = true;
            var componentStackInfo = '';
            if ('production' !== 'production') {
              if (!ReactComponentTreeHook) {
                ReactComponentTreeHook = $__require('npm:react@15.4.2/lib/ReactComponentTreeHook.js');
              }
              if (debugID !== null) {
                componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
              } else if (element !== null) {
                componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
              }
            }
            'production' !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
          }
        }
      }
    }
    module.exports = checkReactTypeSpec;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:fbjs@0.8.9/lib/emptyObject.js', ['github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var emptyObject = {};
    if ('production' !== 'production') {
      Object.freeze(emptyObject);
    }
    module.exports = emptyObject;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:fbjs@0.8.9/lib/shallowEqual.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @typechecks
   * 
   */

  /*eslint-disable no-self-compare */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      // Added the nonzero y check to make Flow happy, but it is redundant
      return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }

  /**
   * Performs equality by iterating through keys on an object and returning false
   * when any key has values which are not strictly equal between the arguments.
   * Returns true when the values of all keys are strictly equal.
   */
  function shallowEqual(objA, objB) {
    if (is(objA, objB)) {
      return true;
    }

    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
      return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
      return false;
    }

    // Test for A's keys different from B.
    for (var i = 0; i < keysA.length; i++) {
      if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
        return false;
      }
    }

    return true;
  }

  module.exports = shallowEqual;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactCompositeComponent.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:object-assign@4.1.1.js', 'npm:react@15.4.2/lib/React.js', 'npm:react-dom@15.4.2/lib/ReactComponentEnvironment.js', 'npm:react@15.4.2/lib/ReactCurrentOwner.js', 'npm:react-dom@15.4.2/lib/ReactErrorUtils.js', 'npm:react-dom@15.4.2/lib/ReactInstanceMap.js', 'npm:react-dom@15.4.2/lib/ReactInstrumentation.js', 'npm:react-dom@15.4.2/lib/ReactNodeTypes.js', 'npm:react-dom@15.4.2/lib/ReactReconciler.js', 'npm:react-dom@15.4.2/lib/checkReactTypeSpec.js', 'npm:fbjs@0.8.9/lib/emptyObject.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'npm:fbjs@0.8.9/lib/shallowEqual.js', 'npm:react-dom@15.4.2/lib/shouldUpdateReactComponent.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js'),
        _assign = $__require('npm:object-assign@4.1.1.js');
    var React = $__require('npm:react@15.4.2/lib/React.js');
    var ReactComponentEnvironment = $__require('npm:react-dom@15.4.2/lib/ReactComponentEnvironment.js');
    var ReactCurrentOwner = $__require('npm:react@15.4.2/lib/ReactCurrentOwner.js');
    var ReactErrorUtils = $__require('npm:react-dom@15.4.2/lib/ReactErrorUtils.js');
    var ReactInstanceMap = $__require('npm:react-dom@15.4.2/lib/ReactInstanceMap.js');
    var ReactInstrumentation = $__require('npm:react-dom@15.4.2/lib/ReactInstrumentation.js');
    var ReactNodeTypes = $__require('npm:react-dom@15.4.2/lib/ReactNodeTypes.js');
    var ReactReconciler = $__require('npm:react-dom@15.4.2/lib/ReactReconciler.js');
    if ('production' !== 'production') {
      var checkReactTypeSpec = $__require('npm:react-dom@15.4.2/lib/checkReactTypeSpec.js');
    }
    var emptyObject = $__require('npm:fbjs@0.8.9/lib/emptyObject.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var shallowEqual = $__require('npm:fbjs@0.8.9/lib/shallowEqual.js');
    var shouldUpdateReactComponent = $__require('npm:react-dom@15.4.2/lib/shouldUpdateReactComponent.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var CompositeTypes = {
      ImpureClass: 0,
      PureClass: 1,
      StatelessFunctional: 2
    };
    function StatelessComponent(Component) {}
    StatelessComponent.prototype.render = function () {
      var Component = ReactInstanceMap.get(this)._currentElement.type;
      var element = Component(this.props, this.context, this.updater);
      warnIfInvalidElement(Component, element);
      return element;
    };
    function warnIfInvalidElement(Component, element) {
      if ('production' !== 'production') {
        'production' !== 'production' ? warning(element === null || element === false || React.isValidElement(element), '%s(...): A valid React element (or null) must be returned. You may have ' + 'returned undefined, an array or some other invalid object.', Component.displayName || Component.name || 'Component') : void 0;
        'production' !== 'production' ? warning(!Component.childContextTypes, '%s(...): childContextTypes cannot be defined on a functional component.', Component.displayName || Component.name || 'Component') : void 0;
      }
    }
    function shouldConstruct(Component) {
      return !!(Component.prototype && Component.prototype.isReactComponent);
    }
    function isPureComponent(Component) {
      return !!(Component.prototype && Component.prototype.isPureReactComponent);
    }
    function measureLifeCyclePerf(fn, debugID, timerType) {
      if (debugID === 0) {
        return fn();
      }
      ReactInstrumentation.debugTool.onBeginLifeCycleTimer(debugID, timerType);
      try {
        return fn();
      } finally {
        ReactInstrumentation.debugTool.onEndLifeCycleTimer(debugID, timerType);
      }
    }
    var nextMountID = 1;
    var ReactCompositeComponent = {
      construct: function (element) {
        this._currentElement = element;
        this._rootNodeID = 0;
        this._compositeType = null;
        this._instance = null;
        this._hostParent = null;
        this._hostContainerInfo = null;
        this._updateBatchNumber = null;
        this._pendingElement = null;
        this._pendingStateQueue = null;
        this._pendingReplaceState = false;
        this._pendingForceUpdate = false;
        this._renderedNodeType = null;
        this._renderedComponent = null;
        this._context = null;
        this._mountOrder = 0;
        this._topLevelWrapper = null;
        this._pendingCallbacks = null;
        this._calledComponentWillUnmount = false;
        if ('production' !== 'production') {
          this._warnedAboutRefsInRender = false;
        }
      },
      mountComponent: function (transaction, hostParent, hostContainerInfo, context) {
        var _this = this;
        this._context = context;
        this._mountOrder = nextMountID++;
        this._hostParent = hostParent;
        this._hostContainerInfo = hostContainerInfo;
        var publicProps = this._currentElement.props;
        var publicContext = this._processContext(context);
        var Component = this._currentElement.type;
        var updateQueue = transaction.getUpdateQueue();
        var doConstruct = shouldConstruct(Component);
        var inst = this._constructComponent(doConstruct, publicProps, publicContext, updateQueue);
        var renderedElement;
        if (!doConstruct && (inst == null || inst.render == null)) {
          renderedElement = inst;
          warnIfInvalidElement(Component, renderedElement);
          !(inst === null || inst === false || React.isValidElement(inst)) ? 'production' !== 'production' ? invariant(false, '%s(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.', Component.displayName || Component.name || 'Component') : _prodInvariant('105', Component.displayName || Component.name || 'Component') : void 0;
          inst = new StatelessComponent(Component);
          this._compositeType = CompositeTypes.StatelessFunctional;
        } else {
          if (isPureComponent(Component)) {
            this._compositeType = CompositeTypes.PureClass;
          } else {
            this._compositeType = CompositeTypes.ImpureClass;
          }
        }
        if ('production' !== 'production') {
          if (inst.render == null) {
            'production' !== 'production' ? warning(false, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`.', Component.displayName || Component.name || 'Component') : void 0;
          }
          var propsMutated = inst.props !== publicProps;
          var componentName = Component.displayName || Component.name || 'Component';
          'production' !== 'production' ? warning(inst.props === undefined || !propsMutated, '%s(...): When calling super() in `%s`, make sure to pass ' + 'up the same props that your component\'s constructor was passed.', componentName, componentName) : void 0;
        }
        inst.props = publicProps;
        inst.context = publicContext;
        inst.refs = emptyObject;
        inst.updater = updateQueue;
        this._instance = inst;
        ReactInstanceMap.set(inst, this);
        if ('production' !== 'production') {
          'production' !== 'production' ? warning(!inst.getInitialState || inst.getInitialState.isReactClassApproved || inst.state, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', this.getName() || 'a component') : void 0;
          'production' !== 'production' ? warning(!inst.getDefaultProps || inst.getDefaultProps.isReactClassApproved, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', this.getName() || 'a component') : void 0;
          'production' !== 'production' ? warning(!inst.propTypes, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', this.getName() || 'a component') : void 0;
          'production' !== 'production' ? warning(!inst.contextTypes, 'contextTypes was defined as an instance property on %s. Use a ' + 'static property to define contextTypes instead.', this.getName() || 'a component') : void 0;
          'production' !== 'production' ? warning(typeof inst.componentShouldUpdate !== 'function', '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', this.getName() || 'A component') : void 0;
          'production' !== 'production' ? warning(typeof inst.componentDidUnmount !== 'function', '%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', this.getName() || 'A component') : void 0;
          'production' !== 'production' ? warning(typeof inst.componentWillRecieveProps !== 'function', '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', this.getName() || 'A component') : void 0;
        }
        var initialState = inst.state;
        if (initialState === undefined) {
          inst.state = initialState = null;
        }
        !(typeof initialState === 'object' && !Array.isArray(initialState)) ? 'production' !== 'production' ? invariant(false, '%s.state: must be set to an object or null', this.getName() || 'ReactCompositeComponent') : _prodInvariant('106', this.getName() || 'ReactCompositeComponent') : void 0;
        this._pendingStateQueue = null;
        this._pendingReplaceState = false;
        this._pendingForceUpdate = false;
        var markup;
        if (inst.unstable_handleError) {
          markup = this.performInitialMountWithErrorHandling(renderedElement, hostParent, hostContainerInfo, transaction, context);
        } else {
          markup = this.performInitialMount(renderedElement, hostParent, hostContainerInfo, transaction, context);
        }
        if (inst.componentDidMount) {
          if ('production' !== 'production') {
            transaction.getReactMountReady().enqueue(function () {
              measureLifeCyclePerf(function () {
                return inst.componentDidMount();
              }, _this._debugID, 'componentDidMount');
            });
          } else {
            transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);
          }
        }
        return markup;
      },
      _constructComponent: function (doConstruct, publicProps, publicContext, updateQueue) {
        if ('production' !== 'production') {
          ReactCurrentOwner.current = this;
          try {
            return this._constructComponentWithoutOwner(doConstruct, publicProps, publicContext, updateQueue);
          } finally {
            ReactCurrentOwner.current = null;
          }
        } else {
          return this._constructComponentWithoutOwner(doConstruct, publicProps, publicContext, updateQueue);
        }
      },
      _constructComponentWithoutOwner: function (doConstruct, publicProps, publicContext, updateQueue) {
        var Component = this._currentElement.type;
        if (doConstruct) {
          if ('production' !== 'production') {
            return measureLifeCyclePerf(function () {
              return new Component(publicProps, publicContext, updateQueue);
            }, this._debugID, 'ctor');
          } else {
            return new Component(publicProps, publicContext, updateQueue);
          }
        }
        if ('production' !== 'production') {
          return measureLifeCyclePerf(function () {
            return Component(publicProps, publicContext, updateQueue);
          }, this._debugID, 'render');
        } else {
          return Component(publicProps, publicContext, updateQueue);
        }
      },
      performInitialMountWithErrorHandling: function (renderedElement, hostParent, hostContainerInfo, transaction, context) {
        var markup;
        var checkpoint = transaction.checkpoint();
        try {
          markup = this.performInitialMount(renderedElement, hostParent, hostContainerInfo, transaction, context);
        } catch (e) {
          transaction.rollback(checkpoint);
          this._instance.unstable_handleError(e);
          if (this._pendingStateQueue) {
            this._instance.state = this._processPendingState(this._instance.props, this._instance.context);
          }
          checkpoint = transaction.checkpoint();
          this._renderedComponent.unmountComponent(true);
          transaction.rollback(checkpoint);
          markup = this.performInitialMount(renderedElement, hostParent, hostContainerInfo, transaction, context);
        }
        return markup;
      },
      performInitialMount: function (renderedElement, hostParent, hostContainerInfo, transaction, context) {
        var inst = this._instance;
        var debugID = 0;
        if ('production' !== 'production') {
          debugID = this._debugID;
        }
        if (inst.componentWillMount) {
          if ('production' !== 'production') {
            measureLifeCyclePerf(function () {
              return inst.componentWillMount();
            }, debugID, 'componentWillMount');
          } else {
            inst.componentWillMount();
          }
          if (this._pendingStateQueue) {
            inst.state = this._processPendingState(inst.props, inst.context);
          }
        }
        if (renderedElement === undefined) {
          renderedElement = this._renderValidatedComponent();
        }
        var nodeType = ReactNodeTypes.getType(renderedElement);
        this._renderedNodeType = nodeType;
        var child = this._instantiateReactComponent(renderedElement, nodeType !== ReactNodeTypes.EMPTY);
        this._renderedComponent = child;
        var markup = ReactReconciler.mountComponent(child, transaction, hostParent, hostContainerInfo, this._processChildContext(context), debugID);
        if ('production' !== 'production') {
          if (debugID !== 0) {
            var childDebugIDs = child._debugID !== 0 ? [child._debugID] : [];
            ReactInstrumentation.debugTool.onSetChildren(debugID, childDebugIDs);
          }
        }
        return markup;
      },
      getHostNode: function () {
        return ReactReconciler.getHostNode(this._renderedComponent);
      },
      unmountComponent: function (safely) {
        if (!this._renderedComponent) {
          return;
        }
        var inst = this._instance;
        if (inst.componentWillUnmount && !inst._calledComponentWillUnmount) {
          inst._calledComponentWillUnmount = true;
          if (safely) {
            var name = this.getName() + '.componentWillUnmount()';
            ReactErrorUtils.invokeGuardedCallback(name, inst.componentWillUnmount.bind(inst));
          } else {
            if ('production' !== 'production') {
              measureLifeCyclePerf(function () {
                return inst.componentWillUnmount();
              }, this._debugID, 'componentWillUnmount');
            } else {
              inst.componentWillUnmount();
            }
          }
        }
        if (this._renderedComponent) {
          ReactReconciler.unmountComponent(this._renderedComponent, safely);
          this._renderedNodeType = null;
          this._renderedComponent = null;
          this._instance = null;
        }
        this._pendingStateQueue = null;
        this._pendingReplaceState = false;
        this._pendingForceUpdate = false;
        this._pendingCallbacks = null;
        this._pendingElement = null;
        this._context = null;
        this._rootNodeID = 0;
        this._topLevelWrapper = null;
        ReactInstanceMap.remove(inst);
      },
      _maskContext: function (context) {
        var Component = this._currentElement.type;
        var contextTypes = Component.contextTypes;
        if (!contextTypes) {
          return emptyObject;
        }
        var maskedContext = {};
        for (var contextName in contextTypes) {
          maskedContext[contextName] = context[contextName];
        }
        return maskedContext;
      },
      _processContext: function (context) {
        var maskedContext = this._maskContext(context);
        if ('production' !== 'production') {
          var Component = this._currentElement.type;
          if (Component.contextTypes) {
            this._checkContextTypes(Component.contextTypes, maskedContext, 'context');
          }
        }
        return maskedContext;
      },
      _processChildContext: function (currentContext) {
        var Component = this._currentElement.type;
        var inst = this._instance;
        var childContext;
        if (inst.getChildContext) {
          if ('production' !== 'production') {
            ReactInstrumentation.debugTool.onBeginProcessingChildContext();
            try {
              childContext = inst.getChildContext();
            } finally {
              ReactInstrumentation.debugTool.onEndProcessingChildContext();
            }
          } else {
            childContext = inst.getChildContext();
          }
        }
        if (childContext) {
          !(typeof Component.childContextTypes === 'object') ? 'production' !== 'production' ? invariant(false, '%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().', this.getName() || 'ReactCompositeComponent') : _prodInvariant('107', this.getName() || 'ReactCompositeComponent') : void 0;
          if ('production' !== 'production') {
            this._checkContextTypes(Component.childContextTypes, childContext, 'childContext');
          }
          for (var name in childContext) {
            !(name in Component.childContextTypes) ? 'production' !== 'production' ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', this.getName() || 'ReactCompositeComponent', name) : _prodInvariant('108', this.getName() || 'ReactCompositeComponent', name) : void 0;
          }
          return _assign({}, currentContext, childContext);
        }
        return currentContext;
      },
      _checkContextTypes: function (typeSpecs, values, location) {
        if ('production' !== 'production') {
          checkReactTypeSpec(typeSpecs, values, location, this.getName(), null, this._debugID);
        }
      },
      receiveComponent: function (nextElement, transaction, nextContext) {
        var prevElement = this._currentElement;
        var prevContext = this._context;
        this._pendingElement = null;
        this.updateComponent(transaction, prevElement, nextElement, prevContext, nextContext);
      },
      performUpdateIfNecessary: function (transaction) {
        if (this._pendingElement != null) {
          ReactReconciler.receiveComponent(this, this._pendingElement, transaction, this._context);
        } else if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
          this.updateComponent(transaction, this._currentElement, this._currentElement, this._context, this._context);
        } else {
          this._updateBatchNumber = null;
        }
      },
      updateComponent: function (transaction, prevParentElement, nextParentElement, prevUnmaskedContext, nextUnmaskedContext) {
        var inst = this._instance;
        !(inst != null) ? 'production' !== 'production' ? invariant(false, 'Attempted to update component `%s` that has already been unmounted (or failed to mount).', this.getName() || 'ReactCompositeComponent') : _prodInvariant('136', this.getName() || 'ReactCompositeComponent') : void 0;
        var willReceive = false;
        var nextContext;
        if (this._context === nextUnmaskedContext) {
          nextContext = inst.context;
        } else {
          nextContext = this._processContext(nextUnmaskedContext);
          willReceive = true;
        }
        var prevProps = prevParentElement.props;
        var nextProps = nextParentElement.props;
        if (prevParentElement !== nextParentElement) {
          willReceive = true;
        }
        if (willReceive && inst.componentWillReceiveProps) {
          if ('production' !== 'production') {
            measureLifeCyclePerf(function () {
              return inst.componentWillReceiveProps(nextProps, nextContext);
            }, this._debugID, 'componentWillReceiveProps');
          } else {
            inst.componentWillReceiveProps(nextProps, nextContext);
          }
        }
        var nextState = this._processPendingState(nextProps, nextContext);
        var shouldUpdate = true;
        if (!this._pendingForceUpdate) {
          if (inst.shouldComponentUpdate) {
            if ('production' !== 'production') {
              shouldUpdate = measureLifeCyclePerf(function () {
                return inst.shouldComponentUpdate(nextProps, nextState, nextContext);
              }, this._debugID, 'shouldComponentUpdate');
            } else {
              shouldUpdate = inst.shouldComponentUpdate(nextProps, nextState, nextContext);
            }
          } else {
            if (this._compositeType === CompositeTypes.PureClass) {
              shouldUpdate = !shallowEqual(prevProps, nextProps) || !shallowEqual(inst.state, nextState);
            }
          }
        }
        if ('production' !== 'production') {
          'production' !== 'production' ? warning(shouldUpdate !== undefined, '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', this.getName() || 'ReactCompositeComponent') : void 0;
        }
        this._updateBatchNumber = null;
        if (shouldUpdate) {
          this._pendingForceUpdate = false;
          this._performComponentUpdate(nextParentElement, nextProps, nextState, nextContext, transaction, nextUnmaskedContext);
        } else {
          this._currentElement = nextParentElement;
          this._context = nextUnmaskedContext;
          inst.props = nextProps;
          inst.state = nextState;
          inst.context = nextContext;
        }
      },
      _processPendingState: function (props, context) {
        var inst = this._instance;
        var queue = this._pendingStateQueue;
        var replace = this._pendingReplaceState;
        this._pendingReplaceState = false;
        this._pendingStateQueue = null;
        if (!queue) {
          return inst.state;
        }
        if (replace && queue.length === 1) {
          return queue[0];
        }
        var nextState = _assign({}, replace ? queue[0] : inst.state);
        for (var i = replace ? 1 : 0; i < queue.length; i++) {
          var partial = queue[i];
          _assign(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);
        }
        return nextState;
      },
      _performComponentUpdate: function (nextElement, nextProps, nextState, nextContext, transaction, unmaskedContext) {
        var _this2 = this;
        var inst = this._instance;
        var hasComponentDidUpdate = Boolean(inst.componentDidUpdate);
        var prevProps;
        var prevState;
        var prevContext;
        if (hasComponentDidUpdate) {
          prevProps = inst.props;
          prevState = inst.state;
          prevContext = inst.context;
        }
        if (inst.componentWillUpdate) {
          if ('production' !== 'production') {
            measureLifeCyclePerf(function () {
              return inst.componentWillUpdate(nextProps, nextState, nextContext);
            }, this._debugID, 'componentWillUpdate');
          } else {
            inst.componentWillUpdate(nextProps, nextState, nextContext);
          }
        }
        this._currentElement = nextElement;
        this._context = unmaskedContext;
        inst.props = nextProps;
        inst.state = nextState;
        inst.context = nextContext;
        this._updateRenderedComponent(transaction, unmaskedContext);
        if (hasComponentDidUpdate) {
          if ('production' !== 'production') {
            transaction.getReactMountReady().enqueue(function () {
              measureLifeCyclePerf(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), _this2._debugID, 'componentDidUpdate');
            });
          } else {
            transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), inst);
          }
        }
      },
      _updateRenderedComponent: function (transaction, context) {
        var prevComponentInstance = this._renderedComponent;
        var prevRenderedElement = prevComponentInstance._currentElement;
        var nextRenderedElement = this._renderValidatedComponent();
        var debugID = 0;
        if ('production' !== 'production') {
          debugID = this._debugID;
        }
        if (shouldUpdateReactComponent(prevRenderedElement, nextRenderedElement)) {
          ReactReconciler.receiveComponent(prevComponentInstance, nextRenderedElement, transaction, this._processChildContext(context));
        } else {
          var oldHostNode = ReactReconciler.getHostNode(prevComponentInstance);
          ReactReconciler.unmountComponent(prevComponentInstance, false);
          var nodeType = ReactNodeTypes.getType(nextRenderedElement);
          this._renderedNodeType = nodeType;
          var child = this._instantiateReactComponent(nextRenderedElement, nodeType !== ReactNodeTypes.EMPTY);
          this._renderedComponent = child;
          var nextMarkup = ReactReconciler.mountComponent(child, transaction, this._hostParent, this._hostContainerInfo, this._processChildContext(context), debugID);
          if ('production' !== 'production') {
            if (debugID !== 0) {
              var childDebugIDs = child._debugID !== 0 ? [child._debugID] : [];
              ReactInstrumentation.debugTool.onSetChildren(debugID, childDebugIDs);
            }
          }
          this._replaceNodeWithMarkup(oldHostNode, nextMarkup, prevComponentInstance);
        }
      },
      _replaceNodeWithMarkup: function (oldHostNode, nextMarkup, prevInstance) {
        ReactComponentEnvironment.replaceNodeWithMarkup(oldHostNode, nextMarkup, prevInstance);
      },
      _renderValidatedComponentWithoutOwnerOrContext: function () {
        var inst = this._instance;
        var renderedElement;
        if ('production' !== 'production') {
          renderedElement = measureLifeCyclePerf(function () {
            return inst.render();
          }, this._debugID, 'render');
        } else {
          renderedElement = inst.render();
        }
        if ('production' !== 'production') {
          if (renderedElement === undefined && inst.render._isMockFunction) {
            renderedElement = null;
          }
        }
        return renderedElement;
      },
      _renderValidatedComponent: function () {
        var renderedElement;
        if ('production' !== 'production' || this._compositeType !== CompositeTypes.StatelessFunctional) {
          ReactCurrentOwner.current = this;
          try {
            renderedElement = this._renderValidatedComponentWithoutOwnerOrContext();
          } finally {
            ReactCurrentOwner.current = null;
          }
        } else {
          renderedElement = this._renderValidatedComponentWithoutOwnerOrContext();
        }
        !(renderedElement === null || renderedElement === false || React.isValidElement(renderedElement)) ? 'production' !== 'production' ? invariant(false, '%s.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.', this.getName() || 'ReactCompositeComponent') : _prodInvariant('109', this.getName() || 'ReactCompositeComponent') : void 0;
        return renderedElement;
      },
      attachRef: function (ref, component) {
        var inst = this.getPublicInstance();
        !(inst != null) ? 'production' !== 'production' ? invariant(false, 'Stateless function components cannot have refs.') : _prodInvariant('110') : void 0;
        var publicComponentInstance = component.getPublicInstance();
        if ('production' !== 'production') {
          var componentName = component && component.getName ? component.getName() : 'a component';
          'production' !== 'production' ? warning(publicComponentInstance != null || component._compositeType !== CompositeTypes.StatelessFunctional, 'Stateless function components cannot be given refs ' + '(See ref "%s" in %s created by %s). ' + 'Attempts to access this ref will fail.', ref, componentName, this.getName()) : void 0;
        }
        var refs = inst.refs === emptyObject ? inst.refs = {} : inst.refs;
        refs[ref] = publicComponentInstance;
      },
      detachRef: function (ref) {
        var refs = this.getPublicInstance().refs;
        delete refs[ref];
      },
      getName: function () {
        var type = this._currentElement.type;
        var constructor = this._instance && this._instance.constructor;
        return type.displayName || constructor && constructor.displayName || type.name || constructor && constructor.name || null;
      },
      getPublicInstance: function () {
        var inst = this._instance;
        if (this._compositeType === CompositeTypes.StatelessFunctional) {
          return null;
        }
        return inst;
      },
      _instantiateReactComponent: null
    };
    module.exports = ReactCompositeComponent;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactEmptyComponent.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2014-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var emptyComponentFactory;

  var ReactEmptyComponentInjection = {
    injectEmptyComponentFactory: function (factory) {
      emptyComponentFactory = factory;
    }
  };

  var ReactEmptyComponent = {
    create: function (instantiate) {
      return emptyComponentFactory(instantiate);
    }
  };

  ReactEmptyComponent.injection = ReactEmptyComponentInjection;

  module.exports = ReactEmptyComponent;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactHostComponent.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var genericComponentClass = null;
    var textComponentClass = null;
    var ReactHostComponentInjection = {
      injectGenericComponentClass: function (componentClass) {
        genericComponentClass = componentClass;
      },
      injectTextComponentClass: function (componentClass) {
        textComponentClass = componentClass;
      }
    };
    function createInternalComponent(element) {
      !genericComponentClass ? 'production' !== 'production' ? invariant(false, 'There is no registered component for the tag %s', element.type) : _prodInvariant('111', element.type) : void 0;
      return new genericComponentClass(element);
    }
    function createInstanceForText(text) {
      return new textComponentClass(text);
    }
    function isTextComponent(component) {
      return component instanceof textComponentClass;
    }
    var ReactHostComponent = {
      createInternalComponent: createInternalComponent,
      createInstanceForText: createInstanceForText,
      isTextComponent: isTextComponent,
      injection: ReactHostComponentInjection
    };
    module.exports = ReactHostComponent;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/getNextDebugID.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var nextDebugID = 1;

  function getNextDebugID() {
    return nextDebugID++;
  }

  module.exports = getNextDebugID;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/instantiateReactComponent.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:object-assign@4.1.1.js', 'npm:react-dom@15.4.2/lib/ReactCompositeComponent.js', 'npm:react-dom@15.4.2/lib/ReactEmptyComponent.js', 'npm:react-dom@15.4.2/lib/ReactHostComponent.js', 'npm:react-dom@15.4.2/lib/getNextDebugID.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js'),
        _assign = $__require('npm:object-assign@4.1.1.js');
    var ReactCompositeComponent = $__require('npm:react-dom@15.4.2/lib/ReactCompositeComponent.js');
    var ReactEmptyComponent = $__require('npm:react-dom@15.4.2/lib/ReactEmptyComponent.js');
    var ReactHostComponent = $__require('npm:react-dom@15.4.2/lib/ReactHostComponent.js');
    var getNextDebugID = $__require('npm:react-dom@15.4.2/lib/getNextDebugID.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var ReactCompositeComponentWrapper = function (element) {
      this.construct(element);
    };
    _assign(ReactCompositeComponentWrapper.prototype, ReactCompositeComponent, { _instantiateReactComponent: instantiateReactComponent });
    function getDeclarationErrorAddendum(owner) {
      if (owner) {
        var name = owner.getName();
        if (name) {
          return ' Check the render method of `' + name + '`.';
        }
      }
      return '';
    }
    function isInternalComponentType(type) {
      return typeof type === 'function' && typeof type.prototype !== 'undefined' && typeof type.prototype.mountComponent === 'function' && typeof type.prototype.receiveComponent === 'function';
    }
    function instantiateReactComponent(node, shouldHaveDebugID) {
      var instance;
      if (node === null || node === false) {
        instance = ReactEmptyComponent.create(instantiateReactComponent);
      } else if (typeof node === 'object') {
        var element = node;
        var type = element.type;
        if (typeof type !== 'function' && typeof type !== 'string') {
          var info = '';
          if ('production' !== 'production') {
            if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
              info += ' You likely forgot to export your component from the file ' + 'it\'s defined in.';
            }
          }
          info += getDeclarationErrorAddendum(element._owner);
          !false ? 'production' !== 'production' ? invariant(false, 'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s', type == null ? type : typeof type, info) : _prodInvariant('130', type == null ? type : typeof type, info) : void 0;
        }
        if (typeof element.type === 'string') {
          instance = ReactHostComponent.createInternalComponent(element);
        } else if (isInternalComponentType(element.type)) {
          instance = new element.type(element);
          if (!instance.getHostNode) {
            instance.getHostNode = instance.getNativeNode;
          }
        } else {
          instance = new ReactCompositeComponentWrapper(element);
        }
      } else if (typeof node === 'string' || typeof node === 'number') {
        instance = ReactHostComponent.createInstanceForText(node);
      } else {
        !false ? 'production' !== 'production' ? invariant(false, 'Encountered invalid React node of type %s', typeof node) : _prodInvariant('131', typeof node) : void 0;
      }
      if ('production' !== 'production') {
        'production' !== 'production' ? warning(typeof instance.mountComponent === 'function' && typeof instance.receiveComponent === 'function' && typeof instance.getHostNode === 'function' && typeof instance.unmountComponent === 'function', 'Only React Components can be mounted.') : void 0;
      }
      instance._mountIndex = 0;
      instance._mountImage = null;
      if ('production' !== 'production') {
        instance._debugID = shouldHaveDebugID ? getNextDebugID() : 0;
      }
      if ('production' !== 'production') {
        if (Object.preventExtensions) {
          Object.preventExtensions(instance);
        }
      }
      return instance;
    }
    module.exports = instantiateReactComponent;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/DOMNamespaces.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var DOMNamespaces = {
    html: 'http://www.w3.org/1999/xhtml',
    mathml: 'http://www.w3.org/1998/Math/MathML',
    svg: 'http://www.w3.org/2000/svg'
  };

  module.exports = DOMNamespaces;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/createMicrosoftUnsafeLocalFunction.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  /* globals MSApp */

  'use strict';

  /**
   * Create a function which has 'unsafe' privileges (required by windows8 apps)
   */

  var global = this || self,
      GLOBAL = global;
  var createMicrosoftUnsafeLocalFunction = function (func) {
    if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
      return function (arg0, arg1, arg2, arg3) {
        MSApp.execUnsafeLocalFunction(function () {
          return func(arg0, arg1, arg2, arg3);
        });
      };
    } else {
      return func;
    }
  };

  module.exports = createMicrosoftUnsafeLocalFunction;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/setInnerHTML.js', ['npm:fbjs@0.8.9/lib/ExecutionEnvironment.js', 'npm:react-dom@15.4.2/lib/DOMNamespaces.js', 'npm:react-dom@15.4.2/lib/createMicrosoftUnsafeLocalFunction.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var ExecutionEnvironment = $__require('npm:fbjs@0.8.9/lib/ExecutionEnvironment.js');
    var DOMNamespaces = $__require('npm:react-dom@15.4.2/lib/DOMNamespaces.js');
    var WHITESPACE_TEST = /^[ \r\n\t\f]/;
    var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;
    var createMicrosoftUnsafeLocalFunction = $__require('npm:react-dom@15.4.2/lib/createMicrosoftUnsafeLocalFunction.js');
    var reusableSVGContainer;
    var setInnerHTML = createMicrosoftUnsafeLocalFunction(function (node, html) {
      if (node.namespaceURI === DOMNamespaces.svg && !('innerHTML' in node)) {
        reusableSVGContainer = reusableSVGContainer || document.createElement('div');
        reusableSVGContainer.innerHTML = '<svg>' + html + '</svg>';
        var svgNode = reusableSVGContainer.firstChild;
        while (svgNode.firstChild) {
          node.appendChild(svgNode.firstChild);
        }
      } else {
        node.innerHTML = html;
      }
    });
    if (ExecutionEnvironment.canUseDOM) {
      var testElement = document.createElement('div');
      testElement.innerHTML = ' ';
      if (testElement.innerHTML === '') {
        setInnerHTML = function (node, html) {
          if (node.parentNode) {
            node.parentNode.replaceChild(node, node);
          }
          if (WHITESPACE_TEST.test(html) || html[0] === '<' && NONVISIBLE_TEST.test(html)) {
            node.innerHTML = String.fromCharCode(0xFEFF) + html;
            var textNode = node.firstChild;
            if (textNode.data.length === 1) {
              node.removeChild(textNode);
            } else {
              textNode.deleteData(0, 1);
            }
          } else {
            node.innerHTML = html;
          }
        };
      }
      testElement = null;
    }
    module.exports = setInnerHTML;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/shouldUpdateReactComponent.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  /**
   * Given a `prevElement` and `nextElement`, determines if the existing
   * instance should be updated as opposed to being destroyed or replaced by a new
   * instance. Both arguments are elements. This ensures that this logic can
   * operate on stateless trees without any backing instance.
   *
   * @param {?object} prevElement
   * @param {?object} nextElement
   * @return {boolean} True if the existing instance should be updated.
   * @protected
   */

  var global = this || self,
      GLOBAL = global;
  function shouldUpdateReactComponent(prevElement, nextElement) {
    var prevEmpty = prevElement === null || prevElement === false;
    var nextEmpty = nextElement === null || nextElement === false;
    if (prevEmpty || nextEmpty) {
      return prevEmpty === nextEmpty;
    }

    var prevType = typeof prevElement;
    var nextType = typeof nextElement;
    if (prevType === 'string' || prevType === 'number') {
      return nextType === 'string' || nextType === 'number';
    } else {
      return nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
    }
  }

  module.exports = shouldUpdateReactComponent;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactMount.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:react-dom@15.4.2/lib/DOMLazyTree.js', 'npm:react-dom@15.4.2/lib/DOMProperty.js', 'npm:react@15.4.2/lib/React.js', 'npm:react-dom@15.4.2/lib/ReactBrowserEventEmitter.js', 'npm:react@15.4.2/lib/ReactCurrentOwner.js', 'npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js', 'npm:react-dom@15.4.2/lib/ReactDOMContainerInfo.js', 'npm:react-dom@15.4.2/lib/ReactDOMFeatureFlags.js', 'npm:react-dom@15.4.2/lib/ReactFeatureFlags.js', 'npm:react-dom@15.4.2/lib/ReactInstanceMap.js', 'npm:react-dom@15.4.2/lib/ReactInstrumentation.js', 'npm:react-dom@15.4.2/lib/ReactMarkupChecksum.js', 'npm:react-dom@15.4.2/lib/ReactReconciler.js', 'npm:react-dom@15.4.2/lib/ReactUpdateQueue.js', 'npm:react-dom@15.4.2/lib/ReactUpdates.js', 'npm:fbjs@0.8.9/lib/emptyObject.js', 'npm:react-dom@15.4.2/lib/instantiateReactComponent.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'npm:react-dom@15.4.2/lib/setInnerHTML.js', 'npm:react-dom@15.4.2/lib/shouldUpdateReactComponent.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    var DOMLazyTree = $__require('npm:react-dom@15.4.2/lib/DOMLazyTree.js');
    var DOMProperty = $__require('npm:react-dom@15.4.2/lib/DOMProperty.js');
    var React = $__require('npm:react@15.4.2/lib/React.js');
    var ReactBrowserEventEmitter = $__require('npm:react-dom@15.4.2/lib/ReactBrowserEventEmitter.js');
    var ReactCurrentOwner = $__require('npm:react@15.4.2/lib/ReactCurrentOwner.js');
    var ReactDOMComponentTree = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js');
    var ReactDOMContainerInfo = $__require('npm:react-dom@15.4.2/lib/ReactDOMContainerInfo.js');
    var ReactDOMFeatureFlags = $__require('npm:react-dom@15.4.2/lib/ReactDOMFeatureFlags.js');
    var ReactFeatureFlags = $__require('npm:react-dom@15.4.2/lib/ReactFeatureFlags.js');
    var ReactInstanceMap = $__require('npm:react-dom@15.4.2/lib/ReactInstanceMap.js');
    var ReactInstrumentation = $__require('npm:react-dom@15.4.2/lib/ReactInstrumentation.js');
    var ReactMarkupChecksum = $__require('npm:react-dom@15.4.2/lib/ReactMarkupChecksum.js');
    var ReactReconciler = $__require('npm:react-dom@15.4.2/lib/ReactReconciler.js');
    var ReactUpdateQueue = $__require('npm:react-dom@15.4.2/lib/ReactUpdateQueue.js');
    var ReactUpdates = $__require('npm:react-dom@15.4.2/lib/ReactUpdates.js');
    var emptyObject = $__require('npm:fbjs@0.8.9/lib/emptyObject.js');
    var instantiateReactComponent = $__require('npm:react-dom@15.4.2/lib/instantiateReactComponent.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var setInnerHTML = $__require('npm:react-dom@15.4.2/lib/setInnerHTML.js');
    var shouldUpdateReactComponent = $__require('npm:react-dom@15.4.2/lib/shouldUpdateReactComponent.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
    var ROOT_ATTR_NAME = DOMProperty.ROOT_ATTRIBUTE_NAME;
    var ELEMENT_NODE_TYPE = 1;
    var DOC_NODE_TYPE = 9;
    var DOCUMENT_FRAGMENT_NODE_TYPE = 11;
    var instancesByReactRootID = {};
    function firstDifferenceIndex(string1, string2) {
      var minLen = Math.min(string1.length, string2.length);
      for (var i = 0; i < minLen; i++) {
        if (string1.charAt(i) !== string2.charAt(i)) {
          return i;
        }
      }
      return string1.length === string2.length ? -1 : minLen;
    }
    function getReactRootElementInContainer(container) {
      if (!container) {
        return null;
      }
      if (container.nodeType === DOC_NODE_TYPE) {
        return container.documentElement;
      } else {
        return container.firstChild;
      }
    }
    function internalGetID(node) {
      return node.getAttribute && node.getAttribute(ATTR_NAME) || '';
    }
    function mountComponentIntoNode(wrapperInstance, container, transaction, shouldReuseMarkup, context) {
      var markerName;
      if (ReactFeatureFlags.logTopLevelRenders) {
        var wrappedElement = wrapperInstance._currentElement.props.child;
        var type = wrappedElement.type;
        markerName = 'React mount: ' + (typeof type === 'string' ? type : type.displayName || type.name);
        console.time(markerName);
      }
      var markup = ReactReconciler.mountComponent(wrapperInstance, transaction, null, ReactDOMContainerInfo(wrapperInstance, container), context, 0);
      if (markerName) {
        console.timeEnd(markerName);
      }
      wrapperInstance._renderedComponent._topLevelWrapper = wrapperInstance;
      ReactMount._mountImageIntoNode(markup, container, wrapperInstance, shouldReuseMarkup, transaction);
    }
    function batchedMountComponentIntoNode(componentInstance, container, shouldReuseMarkup, context) {
      var transaction = ReactUpdates.ReactReconcileTransaction.getPooled(!shouldReuseMarkup && ReactDOMFeatureFlags.useCreateElement);
      transaction.perform(mountComponentIntoNode, null, componentInstance, container, transaction, shouldReuseMarkup, context);
      ReactUpdates.ReactReconcileTransaction.release(transaction);
    }
    function unmountComponentFromNode(instance, container, safely) {
      if ('production' !== 'production') {
        ReactInstrumentation.debugTool.onBeginFlush();
      }
      ReactReconciler.unmountComponent(instance, safely);
      if ('production' !== 'production') {
        ReactInstrumentation.debugTool.onEndFlush();
      }
      if (container.nodeType === DOC_NODE_TYPE) {
        container = container.documentElement;
      }
      while (container.lastChild) {
        container.removeChild(container.lastChild);
      }
    }
    function hasNonRootReactChild(container) {
      var rootEl = getReactRootElementInContainer(container);
      if (rootEl) {
        var inst = ReactDOMComponentTree.getInstanceFromNode(rootEl);
        return !!(inst && inst._hostParent);
      }
    }
    function nodeIsRenderedByOtherInstance(container) {
      var rootEl = getReactRootElementInContainer(container);
      return !!(rootEl && isReactNode(rootEl) && !ReactDOMComponentTree.getInstanceFromNode(rootEl));
    }
    function isValidContainer(node) {
      return !!(node && (node.nodeType === ELEMENT_NODE_TYPE || node.nodeType === DOC_NODE_TYPE || node.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE));
    }
    function isReactNode(node) {
      return isValidContainer(node) && (node.hasAttribute(ROOT_ATTR_NAME) || node.hasAttribute(ATTR_NAME));
    }
    function getHostRootInstanceInContainer(container) {
      var rootEl = getReactRootElementInContainer(container);
      var prevHostInstance = rootEl && ReactDOMComponentTree.getInstanceFromNode(rootEl);
      return prevHostInstance && !prevHostInstance._hostParent ? prevHostInstance : null;
    }
    function getTopLevelWrapperInContainer(container) {
      var root = getHostRootInstanceInContainer(container);
      return root ? root._hostContainerInfo._topLevelWrapper : null;
    }
    var topLevelRootCounter = 1;
    var TopLevelWrapper = function () {
      this.rootID = topLevelRootCounter++;
    };
    TopLevelWrapper.prototype.isReactComponent = {};
    if ('production' !== 'production') {
      TopLevelWrapper.displayName = 'TopLevelWrapper';
    }
    TopLevelWrapper.prototype.render = function () {
      return this.props.child;
    };
    TopLevelWrapper.isReactTopLevelWrapper = true;
    var ReactMount = {
      TopLevelWrapper: TopLevelWrapper,
      _instancesByReactRootID: instancesByReactRootID,
      scrollMonitor: function (container, renderCallback) {
        renderCallback();
      },
      _updateRootComponent: function (prevComponent, nextElement, nextContext, container, callback) {
        ReactMount.scrollMonitor(container, function () {
          ReactUpdateQueue.enqueueElementInternal(prevComponent, nextElement, nextContext);
          if (callback) {
            ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
          }
        });
        return prevComponent;
      },
      _renderNewRootComponent: function (nextElement, container, shouldReuseMarkup, context) {
        'production' !== 'production' ? warning(ReactCurrentOwner.current == null, '_renderNewRootComponent(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from ' + 'render is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : void 0;
        !isValidContainer(container) ? 'production' !== 'production' ? invariant(false, '_registerComponent(...): Target container is not a DOM element.') : _prodInvariant('37') : void 0;
        ReactBrowserEventEmitter.ensureScrollValueMonitoring();
        var componentInstance = instantiateReactComponent(nextElement, false);
        ReactUpdates.batchedUpdates(batchedMountComponentIntoNode, componentInstance, container, shouldReuseMarkup, context);
        var wrapperID = componentInstance._instance.rootID;
        instancesByReactRootID[wrapperID] = componentInstance;
        return componentInstance;
      },
      renderSubtreeIntoContainer: function (parentComponent, nextElement, container, callback) {
        !(parentComponent != null && ReactInstanceMap.has(parentComponent)) ? 'production' !== 'production' ? invariant(false, 'parentComponent must be a valid React Component') : _prodInvariant('38') : void 0;
        return ReactMount._renderSubtreeIntoContainer(parentComponent, nextElement, container, callback);
      },
      _renderSubtreeIntoContainer: function (parentComponent, nextElement, container, callback) {
        ReactUpdateQueue.validateCallback(callback, 'ReactDOM.render');
        !React.isValidElement(nextElement) ? 'production' !== 'production' ? invariant(false, 'ReactDOM.render(): Invalid component element.%s', typeof nextElement === 'string' ? ' Instead of passing a string like \'div\', pass ' + 'React.createElement(\'div\') or <div />.' : typeof nextElement === 'function' ? ' Instead of passing a class like Foo, pass ' + 'React.createElement(Foo) or <Foo />.' : nextElement != null && nextElement.props !== undefined ? ' This may be caused by unintentionally loading two independent ' + 'copies of React.' : '') : _prodInvariant('39', typeof nextElement === 'string' ? ' Instead of passing a string like \'div\', pass ' + 'React.createElement(\'div\') or <div />.' : typeof nextElement === 'function' ? ' Instead of passing a class like Foo, pass ' + 'React.createElement(Foo) or <Foo />.' : nextElement != null && nextElement.props !== undefined ? ' This may be caused by unintentionally loading two independent ' + 'copies of React.' : '') : void 0;
        'production' !== 'production' ? warning(!container || !container.tagName || container.tagName.toUpperCase() !== 'BODY', 'render(): Rendering components directly into document.body is ' + 'discouraged, since its children are often manipulated by third-party ' + 'scripts and browser extensions. This may lead to subtle ' + 'reconciliation issues. Try rendering into a container element created ' + 'for your app.') : void 0;
        var nextWrappedElement = React.createElement(TopLevelWrapper, { child: nextElement });
        var nextContext;
        if (parentComponent) {
          var parentInst = ReactInstanceMap.get(parentComponent);
          nextContext = parentInst._processChildContext(parentInst._context);
        } else {
          nextContext = emptyObject;
        }
        var prevComponent = getTopLevelWrapperInContainer(container);
        if (prevComponent) {
          var prevWrappedElement = prevComponent._currentElement;
          var prevElement = prevWrappedElement.props.child;
          if (shouldUpdateReactComponent(prevElement, nextElement)) {
            var publicInst = prevComponent._renderedComponent.getPublicInstance();
            var updatedCallback = callback && function () {
              callback.call(publicInst);
            };
            ReactMount._updateRootComponent(prevComponent, nextWrappedElement, nextContext, container, updatedCallback);
            return publicInst;
          } else {
            ReactMount.unmountComponentAtNode(container);
          }
        }
        var reactRootElement = getReactRootElementInContainer(container);
        var containerHasReactMarkup = reactRootElement && !!internalGetID(reactRootElement);
        var containerHasNonRootReactChild = hasNonRootReactChild(container);
        if ('production' !== 'production') {
          'production' !== 'production' ? warning(!containerHasNonRootReactChild, 'render(...): Replacing React-rendered children with a new root ' + 'component. If you intended to update the children of this node, ' + 'you should instead have the existing children update their state ' + 'and render the new components instead of calling ReactDOM.render.') : void 0;
          if (!containerHasReactMarkup || reactRootElement.nextSibling) {
            var rootElementSibling = reactRootElement;
            while (rootElementSibling) {
              if (internalGetID(rootElementSibling)) {
                'production' !== 'production' ? warning(false, 'render(): Target node has markup rendered by React, but there ' + 'are unrelated nodes as well. This is most commonly caused by ' + 'white-space inserted around server-rendered markup.') : void 0;
                break;
              }
              rootElementSibling = rootElementSibling.nextSibling;
            }
          }
        }
        var shouldReuseMarkup = containerHasReactMarkup && !prevComponent && !containerHasNonRootReactChild;
        var component = ReactMount._renderNewRootComponent(nextWrappedElement, container, shouldReuseMarkup, nextContext)._renderedComponent.getPublicInstance();
        if (callback) {
          callback.call(component);
        }
        return component;
      },
      render: function (nextElement, container, callback) {
        return ReactMount._renderSubtreeIntoContainer(null, nextElement, container, callback);
      },
      unmountComponentAtNode: function (container) {
        'production' !== 'production' ? warning(ReactCurrentOwner.current == null, 'unmountComponentAtNode(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from render ' + 'is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : void 0;
        !isValidContainer(container) ? 'production' !== 'production' ? invariant(false, 'unmountComponentAtNode(...): Target container is not a DOM element.') : _prodInvariant('40') : void 0;
        if ('production' !== 'production') {
          'production' !== 'production' ? warning(!nodeIsRenderedByOtherInstance(container), 'unmountComponentAtNode(): The node you\'re attempting to unmount ' + 'was rendered by another copy of React.') : void 0;
        }
        var prevComponent = getTopLevelWrapperInContainer(container);
        if (!prevComponent) {
          var containerHasNonRootReactChild = hasNonRootReactChild(container);
          var isContainerReactRoot = container.nodeType === 1 && container.hasAttribute(ROOT_ATTR_NAME);
          if ('production' !== 'production') {
            'production' !== 'production' ? warning(!containerHasNonRootReactChild, 'unmountComponentAtNode(): The node you\'re attempting to unmount ' + 'was rendered by React and is not a top-level container. %s', isContainerReactRoot ? 'You may have accidentally passed in a React root node instead ' + 'of its container.' : 'Instead, have the parent component update its state and ' + 'rerender in order to remove this component.') : void 0;
          }
          return false;
        }
        delete instancesByReactRootID[prevComponent._instance.rootID];
        ReactUpdates.batchedUpdates(unmountComponentFromNode, prevComponent, container, false);
        return true;
      },
      _mountImageIntoNode: function (markup, container, instance, shouldReuseMarkup, transaction) {
        !isValidContainer(container) ? 'production' !== 'production' ? invariant(false, 'mountComponentIntoNode(...): Target container is not valid.') : _prodInvariant('41') : void 0;
        if (shouldReuseMarkup) {
          var rootElement = getReactRootElementInContainer(container);
          if (ReactMarkupChecksum.canReuseMarkup(markup, rootElement)) {
            ReactDOMComponentTree.precacheNode(instance, rootElement);
            return;
          } else {
            var checksum = rootElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
            rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
            var rootMarkup = rootElement.outerHTML;
            rootElement.setAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME, checksum);
            var normalizedMarkup = markup;
            if ('production' !== 'production') {
              var normalizer;
              if (container.nodeType === ELEMENT_NODE_TYPE) {
                normalizer = document.createElement('div');
                normalizer.innerHTML = markup;
                normalizedMarkup = normalizer.innerHTML;
              } else {
                normalizer = document.createElement('iframe');
                document.body.appendChild(normalizer);
                normalizer.contentDocument.write(markup);
                normalizedMarkup = normalizer.contentDocument.documentElement.outerHTML;
                document.body.removeChild(normalizer);
              }
            }
            var diffIndex = firstDifferenceIndex(normalizedMarkup, rootMarkup);
            var difference = ' (client) ' + normalizedMarkup.substring(diffIndex - 20, diffIndex + 20) + '\n (server) ' + rootMarkup.substring(diffIndex - 20, diffIndex + 20);
            !(container.nodeType !== DOC_NODE_TYPE) ? 'production' !== 'production' ? invariant(false, 'You\'re trying to render a component to the document using server rendering but the checksum was invalid. This usually means you rendered a different component type or props on the client from the one on the server, or your render() methods are impure. React cannot handle this case due to cross-browser quirks by rendering at the document root. You should look for environment dependent code in your components and ensure the props are the same client and server side:\n%s', difference) : _prodInvariant('42', difference) : void 0;
            if ('production' !== 'production') {
              'production' !== 'production' ? warning(false, 'React attempted to reuse markup in a container but the ' + 'checksum was invalid. This generally means that you are ' + 'using server rendering and the markup generated on the ' + 'server was not what the client was expecting. React injected ' + 'new markup to compensate which works but you have lost many ' + 'of the benefits of server rendering. Instead, figure out ' + 'why the markup being generated is different on the client ' + 'or server:\n%s', difference) : void 0;
            }
          }
        }
        !(container.nodeType !== DOC_NODE_TYPE) ? 'production' !== 'production' ? invariant(false, 'You\'re trying to render a component to the document but you didn\'t use server rendering. We can\'t do this without using server rendering due to cross-browser quirks. See ReactDOMServer.renderToString() for server rendering.') : _prodInvariant('43') : void 0;
        if (transaction.useCreateElement) {
          while (container.lastChild) {
            container.removeChild(container.lastChild);
          }
          DOMLazyTree.insertTreeBefore(container, markup, null);
        } else {
          setInnerHTML(container, markup);
          ReactDOMComponentTree.precacheNode(instance, container.firstChild);
        }
        if ('production' !== 'production') {
          var hostNode = ReactDOMComponentTree.getInstanceFromNode(container.firstChild);
          if (hostNode._debugID !== 0) {
            ReactInstrumentation.debugTool.onHostOperation({
              instanceID: hostNode._debugID,
              type: 'mount',
              payload: markup.toString()
            });
          }
        }
      }
    };
    module.exports = ReactMount;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/renderSubtreeIntoContainer.js', ['npm:react-dom@15.4.2/lib/ReactMount.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ReactMount = $__require('npm:react-dom@15.4.2/lib/ReactMount.js');
  module.exports = ReactMount.renderSubtreeIntoContainer;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactInvalidSetStateWarningHook.js', ['npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    if ('production' !== 'production') {
      var processingChildContext = false;
      var warnInvalidSetState = function () {
        'production' !== 'production' ? warning(!processingChildContext, 'setState(...): Cannot call setState() inside getChildContext()') : void 0;
      };
    }
    var ReactInvalidSetStateWarningHook = {
      onBeginProcessingChildContext: function () {
        processingChildContext = true;
      },
      onEndProcessingChildContext: function () {
        processingChildContext = false;
      },
      onSetState: function () {
        warnInvalidSetState();
      }
    };
    module.exports = ReactInvalidSetStateWarningHook;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactHostOperationHistoryHook.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2016-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var history = [];

  var ReactHostOperationHistoryHook = {
    onHostOperation: function (operation) {
      history.push(operation);
    },
    clearHistory: function () {
      if (ReactHostOperationHistoryHook._preventClearing) {
        // Should only be used for tests.
        return;
      }

      history = [];
    },
    getHistory: function () {
      return history;
    }
  };

  module.exports = ReactHostOperationHistoryHook;
});
System.registerDynamic('npm:fbjs@0.8.9/lib/ExecutionEnvironment.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

  /**
   * Simple, lightweight module assisting with the detection and context of
   * Worker. Helps avoid circular dependencies and allows code to reason about
   * whether or not they are in a Worker, even if they never include the main
   * `ReactWorker` dependency.
   */
  var ExecutionEnvironment = {

    canUseDOM: canUseDOM,

    canUseWorkers: typeof Worker !== 'undefined',

    canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

    canUseViewport: canUseDOM && !!window.screen,

    isInWorker: !canUseDOM // For now, this is true - might change in the future.

  };

  module.exports = ExecutionEnvironment;
});
System.registerDynamic('npm:fbjs@0.8.9/lib/performance.js', ['npm:fbjs@0.8.9/lib/ExecutionEnvironment.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var ExecutionEnvironment = $__require('npm:fbjs@0.8.9/lib/ExecutionEnvironment.js');
  var performance;
  if (ExecutionEnvironment.canUseDOM) {
    performance = window.performance || window.msPerformance || window.webkitPerformance;
  }
  module.exports = performance || {};
});
System.registerDynamic('npm:fbjs@0.8.9/lib/performanceNow.js', ['npm:fbjs@0.8.9/lib/performance.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var performance = $__require('npm:fbjs@0.8.9/lib/performance.js');
  var performanceNow;
  if (performance.now) {
    performanceNow = function performanceNow() {
      return performance.now();
    };
  } else {
    performanceNow = function performanceNow() {
      return Date.now();
    };
  }
  module.exports = performanceNow;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactDebugTool.js', ['npm:react-dom@15.4.2/lib/ReactInvalidSetStateWarningHook.js', 'npm:react-dom@15.4.2/lib/ReactHostOperationHistoryHook.js', 'npm:react@15.4.2/lib/ReactComponentTreeHook.js', 'npm:fbjs@0.8.9/lib/ExecutionEnvironment.js', 'npm:fbjs@0.8.9/lib/performanceNow.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var ReactInvalidSetStateWarningHook = $__require('npm:react-dom@15.4.2/lib/ReactInvalidSetStateWarningHook.js');
    var ReactHostOperationHistoryHook = $__require('npm:react-dom@15.4.2/lib/ReactHostOperationHistoryHook.js');
    var ReactComponentTreeHook = $__require('npm:react@15.4.2/lib/ReactComponentTreeHook.js');
    var ExecutionEnvironment = $__require('npm:fbjs@0.8.9/lib/ExecutionEnvironment.js');
    var performanceNow = $__require('npm:fbjs@0.8.9/lib/performanceNow.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var hooks = [];
    var didHookThrowForEvent = {};
    function callHook(event, fn, context, arg1, arg2, arg3, arg4, arg5) {
      try {
        fn.call(context, arg1, arg2, arg3, arg4, arg5);
      } catch (e) {
        'production' !== 'production' ? warning(didHookThrowForEvent[event], 'Exception thrown by hook while handling %s: %s', event, e + '\n' + e.stack) : void 0;
        didHookThrowForEvent[event] = true;
      }
    }
    function emitEvent(event, arg1, arg2, arg3, arg4, arg5) {
      for (var i = 0; i < hooks.length; i++) {
        var hook = hooks[i];
        var fn = hook[event];
        if (fn) {
          callHook(event, fn, hook, arg1, arg2, arg3, arg4, arg5);
        }
      }
    }
    var isProfiling = false;
    var flushHistory = [];
    var lifeCycleTimerStack = [];
    var currentFlushNesting = 0;
    var currentFlushMeasurements = [];
    var currentFlushStartTime = 0;
    var currentTimerDebugID = null;
    var currentTimerStartTime = 0;
    var currentTimerNestedFlushDuration = 0;
    var currentTimerType = null;
    var lifeCycleTimerHasWarned = false;
    function clearHistory() {
      ReactComponentTreeHook.purgeUnmountedComponents();
      ReactHostOperationHistoryHook.clearHistory();
    }
    function getTreeSnapshot(registeredIDs) {
      return registeredIDs.reduce(function (tree, id) {
        var ownerID = ReactComponentTreeHook.getOwnerID(id);
        var parentID = ReactComponentTreeHook.getParentID(id);
        tree[id] = {
          displayName: ReactComponentTreeHook.getDisplayName(id),
          text: ReactComponentTreeHook.getText(id),
          updateCount: ReactComponentTreeHook.getUpdateCount(id),
          childIDs: ReactComponentTreeHook.getChildIDs(id),
          ownerID: ownerID || parentID && ReactComponentTreeHook.getOwnerID(parentID) || 0,
          parentID: parentID
        };
        return tree;
      }, {});
    }
    function resetMeasurements() {
      var previousStartTime = currentFlushStartTime;
      var previousMeasurements = currentFlushMeasurements;
      var previousOperations = ReactHostOperationHistoryHook.getHistory();
      if (currentFlushNesting === 0) {
        currentFlushStartTime = 0;
        currentFlushMeasurements = [];
        clearHistory();
        return;
      }
      if (previousMeasurements.length || previousOperations.length) {
        var registeredIDs = ReactComponentTreeHook.getRegisteredIDs();
        flushHistory.push({
          duration: performanceNow() - previousStartTime,
          measurements: previousMeasurements || [],
          operations: previousOperations || [],
          treeSnapshot: getTreeSnapshot(registeredIDs)
        });
      }
      clearHistory();
      currentFlushStartTime = performanceNow();
      currentFlushMeasurements = [];
    }
    function checkDebugID(debugID) {
      var allowRoot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (allowRoot && debugID === 0) {
        return;
      }
      if (!debugID) {
        'production' !== 'production' ? warning(false, 'ReactDebugTool: debugID may not be empty.') : void 0;
      }
    }
    function beginLifeCycleTimer(debugID, timerType) {
      if (currentFlushNesting === 0) {
        return;
      }
      if (currentTimerType && !lifeCycleTimerHasWarned) {
        'production' !== 'production' ? warning(false, 'There is an internal error in the React performance measurement code. ' + 'Did not expect %s timer to start while %s timer is still in ' + 'progress for %s instance.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
        lifeCycleTimerHasWarned = true;
      }
      currentTimerStartTime = performanceNow();
      currentTimerNestedFlushDuration = 0;
      currentTimerDebugID = debugID;
      currentTimerType = timerType;
    }
    function endLifeCycleTimer(debugID, timerType) {
      if (currentFlushNesting === 0) {
        return;
      }
      if (currentTimerType !== timerType && !lifeCycleTimerHasWarned) {
        'production' !== 'production' ? warning(false, 'There is an internal error in the React performance measurement code. ' + 'We did not expect %s timer to stop while %s timer is still in ' + 'progress for %s instance. Please report this as a bug in React.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
        lifeCycleTimerHasWarned = true;
      }
      if (isProfiling) {
        currentFlushMeasurements.push({
          timerType: timerType,
          instanceID: debugID,
          duration: performanceNow() - currentTimerStartTime - currentTimerNestedFlushDuration
        });
      }
      currentTimerStartTime = 0;
      currentTimerNestedFlushDuration = 0;
      currentTimerDebugID = null;
      currentTimerType = null;
    }
    function pauseCurrentLifeCycleTimer() {
      var currentTimer = {
        startTime: currentTimerStartTime,
        nestedFlushStartTime: performanceNow(),
        debugID: currentTimerDebugID,
        timerType: currentTimerType
      };
      lifeCycleTimerStack.push(currentTimer);
      currentTimerStartTime = 0;
      currentTimerNestedFlushDuration = 0;
      currentTimerDebugID = null;
      currentTimerType = null;
    }
    function resumeCurrentLifeCycleTimer() {
      var _lifeCycleTimerStack$ = lifeCycleTimerStack.pop(),
          startTime = _lifeCycleTimerStack$.startTime,
          nestedFlushStartTime = _lifeCycleTimerStack$.nestedFlushStartTime,
          debugID = _lifeCycleTimerStack$.debugID,
          timerType = _lifeCycleTimerStack$.timerType;
      var nestedFlushDuration = performanceNow() - nestedFlushStartTime;
      currentTimerStartTime = startTime;
      currentTimerNestedFlushDuration += nestedFlushDuration;
      currentTimerDebugID = debugID;
      currentTimerType = timerType;
    }
    var lastMarkTimeStamp = 0;
    var canUsePerformanceMeasure = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';
    function shouldMark(debugID) {
      if (!isProfiling || !canUsePerformanceMeasure) {
        return false;
      }
      var element = ReactComponentTreeHook.getElement(debugID);
      if (element == null || typeof element !== 'object') {
        return false;
      }
      var isHostElement = typeof element.type === 'string';
      if (isHostElement) {
        return false;
      }
      return true;
    }
    function markBegin(debugID, markType) {
      if (!shouldMark(debugID)) {
        return;
      }
      var markName = debugID + '::' + markType;
      lastMarkTimeStamp = performanceNow();
      performance.mark(markName);
    }
    function markEnd(debugID, markType) {
      if (!shouldMark(debugID)) {
        return;
      }
      var markName = debugID + '::' + markType;
      var displayName = ReactComponentTreeHook.getDisplayName(debugID) || 'Unknown';
      var timeStamp = performanceNow();
      if (timeStamp - lastMarkTimeStamp > 0.1) {
        var measurementName = displayName + ' [' + markType + ']';
        performance.measure(measurementName, markName);
      }
      performance.clearMarks(markName);
      performance.clearMeasures(measurementName);
    }
    var ReactDebugTool = {
      addHook: function (hook) {
        hooks.push(hook);
      },
      removeHook: function (hook) {
        for (var i = 0; i < hooks.length; i++) {
          if (hooks[i] === hook) {
            hooks.splice(i, 1);
            i--;
          }
        }
      },
      isProfiling: function () {
        return isProfiling;
      },
      beginProfiling: function () {
        if (isProfiling) {
          return;
        }
        isProfiling = true;
        flushHistory.length = 0;
        resetMeasurements();
        ReactDebugTool.addHook(ReactHostOperationHistoryHook);
      },
      endProfiling: function () {
        if (!isProfiling) {
          return;
        }
        isProfiling = false;
        resetMeasurements();
        ReactDebugTool.removeHook(ReactHostOperationHistoryHook);
      },
      getFlushHistory: function () {
        return flushHistory;
      },
      onBeginFlush: function () {
        currentFlushNesting++;
        resetMeasurements();
        pauseCurrentLifeCycleTimer();
        emitEvent('onBeginFlush');
      },
      onEndFlush: function () {
        resetMeasurements();
        currentFlushNesting--;
        resumeCurrentLifeCycleTimer();
        emitEvent('onEndFlush');
      },
      onBeginLifeCycleTimer: function (debugID, timerType) {
        checkDebugID(debugID);
        emitEvent('onBeginLifeCycleTimer', debugID, timerType);
        markBegin(debugID, timerType);
        beginLifeCycleTimer(debugID, timerType);
      },
      onEndLifeCycleTimer: function (debugID, timerType) {
        checkDebugID(debugID);
        endLifeCycleTimer(debugID, timerType);
        markEnd(debugID, timerType);
        emitEvent('onEndLifeCycleTimer', debugID, timerType);
      },
      onBeginProcessingChildContext: function () {
        emitEvent('onBeginProcessingChildContext');
      },
      onEndProcessingChildContext: function () {
        emitEvent('onEndProcessingChildContext');
      },
      onHostOperation: function (operation) {
        checkDebugID(operation.instanceID);
        emitEvent('onHostOperation', operation);
      },
      onSetState: function () {
        emitEvent('onSetState');
      },
      onSetChildren: function (debugID, childDebugIDs) {
        checkDebugID(debugID);
        childDebugIDs.forEach(checkDebugID);
        emitEvent('onSetChildren', debugID, childDebugIDs);
      },
      onBeforeMountComponent: function (debugID, element, parentDebugID) {
        checkDebugID(debugID);
        checkDebugID(parentDebugID, true);
        emitEvent('onBeforeMountComponent', debugID, element, parentDebugID);
        markBegin(debugID, 'mount');
      },
      onMountComponent: function (debugID) {
        checkDebugID(debugID);
        markEnd(debugID, 'mount');
        emitEvent('onMountComponent', debugID);
      },
      onBeforeUpdateComponent: function (debugID, element) {
        checkDebugID(debugID);
        emitEvent('onBeforeUpdateComponent', debugID, element);
        markBegin(debugID, 'update');
      },
      onUpdateComponent: function (debugID) {
        checkDebugID(debugID);
        markEnd(debugID, 'update');
        emitEvent('onUpdateComponent', debugID);
      },
      onBeforeUnmountComponent: function (debugID) {
        checkDebugID(debugID);
        emitEvent('onBeforeUnmountComponent', debugID);
        markBegin(debugID, 'unmount');
      },
      onUnmountComponent: function (debugID) {
        checkDebugID(debugID);
        markEnd(debugID, 'unmount');
        emitEvent('onUnmountComponent', debugID);
      },
      onTestEvent: function () {
        emitEvent('onTestEvent');
      }
    };
    ReactDebugTool.addDevtool = ReactDebugTool.addHook;
    ReactDebugTool.removeDevtool = ReactDebugTool.removeHook;
    ReactDebugTool.addHook(ReactInvalidSetStateWarningHook);
    ReactDebugTool.addHook(ReactComponentTreeHook);
    var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
    if (/[?&]react_perf\b/.test(url)) {
      ReactDebugTool.beginProfiling();
    }
    module.exports = ReactDebugTool;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactInstrumentation.js', ['npm:react-dom@15.4.2/lib/ReactDebugTool.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var debugTool = null;
    if ('production' !== 'production') {
      var ReactDebugTool = $__require('npm:react-dom@15.4.2/lib/ReactDebugTool.js');
      debugTool = ReactDebugTool;
    }
    module.exports = { debugTool: debugTool };
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/EventPluginRegistry.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var eventPluginOrder = null;
    var namesToPlugins = {};
    function recomputePluginOrdering() {
      if (!eventPluginOrder) {
        return;
      }
      for (var pluginName in namesToPlugins) {
        var pluginModule = namesToPlugins[pluginName];
        var pluginIndex = eventPluginOrder.indexOf(pluginName);
        !(pluginIndex > -1) ? 'production' !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.', pluginName) : _prodInvariant('96', pluginName) : void 0;
        if (EventPluginRegistry.plugins[pluginIndex]) {
          continue;
        }
        !pluginModule.extractEvents ? 'production' !== 'production' ? invariant(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.', pluginName) : _prodInvariant('97', pluginName) : void 0;
        EventPluginRegistry.plugins[pluginIndex] = pluginModule;
        var publishedEvents = pluginModule.eventTypes;
        for (var eventName in publishedEvents) {
          !publishEventForPlugin(publishedEvents[eventName], pluginModule, eventName) ? 'production' !== 'production' ? invariant(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : _prodInvariant('98', eventName, pluginName) : void 0;
        }
      }
    }
    function publishEventForPlugin(dispatchConfig, pluginModule, eventName) {
      !!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ? 'production' !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.', eventName) : _prodInvariant('99', eventName) : void 0;
      EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;
      var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
      if (phasedRegistrationNames) {
        for (var phaseName in phasedRegistrationNames) {
          if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
            var phasedRegistrationName = phasedRegistrationNames[phaseName];
            publishRegistrationName(phasedRegistrationName, pluginModule, eventName);
          }
        }
        return true;
      } else if (dispatchConfig.registrationName) {
        publishRegistrationName(dispatchConfig.registrationName, pluginModule, eventName);
        return true;
      }
      return false;
    }
    function publishRegistrationName(registrationName, pluginModule, eventName) {
      !!EventPluginRegistry.registrationNameModules[registrationName] ? 'production' !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.', registrationName) : _prodInvariant('100', registrationName) : void 0;
      EventPluginRegistry.registrationNameModules[registrationName] = pluginModule;
      EventPluginRegistry.registrationNameDependencies[registrationName] = pluginModule.eventTypes[eventName].dependencies;
      if ('production' !== 'production') {
        var lowerCasedName = registrationName.toLowerCase();
        EventPluginRegistry.possibleRegistrationNames[lowerCasedName] = registrationName;
        if (registrationName === 'onDoubleClick') {
          EventPluginRegistry.possibleRegistrationNames.ondblclick = registrationName;
        }
      }
    }
    var EventPluginRegistry = {
      plugins: [],
      eventNameDispatchConfigs: {},
      registrationNameModules: {},
      registrationNameDependencies: {},
      possibleRegistrationNames: 'production' !== 'production' ? {} : null,
      injectEventPluginOrder: function (injectedEventPluginOrder) {
        !!eventPluginOrder ? 'production' !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.') : _prodInvariant('101') : void 0;
        eventPluginOrder = Array.prototype.slice.call(injectedEventPluginOrder);
        recomputePluginOrdering();
      },
      injectEventPluginsByName: function (injectedNamesToPlugins) {
        var isOrderingDirty = false;
        for (var pluginName in injectedNamesToPlugins) {
          if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
            continue;
          }
          var pluginModule = injectedNamesToPlugins[pluginName];
          if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== pluginModule) {
            !!namesToPlugins[pluginName] ? 'production' !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.', pluginName) : _prodInvariant('102', pluginName) : void 0;
            namesToPlugins[pluginName] = pluginModule;
            isOrderingDirty = true;
          }
        }
        if (isOrderingDirty) {
          recomputePluginOrdering();
        }
      },
      getPluginModuleForEvent: function (event) {
        var dispatchConfig = event.dispatchConfig;
        if (dispatchConfig.registrationName) {
          return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;
        }
        if (dispatchConfig.phasedRegistrationNames !== undefined) {
          var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
          for (var phase in phasedRegistrationNames) {
            if (!phasedRegistrationNames.hasOwnProperty(phase)) {
              continue;
            }
            var pluginModule = EventPluginRegistry.registrationNameModules[phasedRegistrationNames[phase]];
            if (pluginModule) {
              return pluginModule;
            }
          }
        }
        return null;
      },
      _resetEventPlugins: function () {
        eventPluginOrder = null;
        for (var pluginName in namesToPlugins) {
          if (namesToPlugins.hasOwnProperty(pluginName)) {
            delete namesToPlugins[pluginName];
          }
        }
        EventPluginRegistry.plugins.length = 0;
        var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
        for (var eventName in eventNameDispatchConfigs) {
          if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
            delete eventNameDispatchConfigs[eventName];
          }
        }
        var registrationNameModules = EventPluginRegistry.registrationNameModules;
        for (var registrationName in registrationNameModules) {
          if (registrationNameModules.hasOwnProperty(registrationName)) {
            delete registrationNameModules[registrationName];
          }
        }
        if ('production' !== 'production') {
          var possibleRegistrationNames = EventPluginRegistry.possibleRegistrationNames;
          for (var lowerCasedName in possibleRegistrationNames) {
            if (possibleRegistrationNames.hasOwnProperty(lowerCasedName)) {
              delete possibleRegistrationNames[lowerCasedName];
            }
          }
        }
      }
    };
    module.exports = EventPluginRegistry;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactDOMUnknownPropertyHook.js', ['npm:react-dom@15.4.2/lib/DOMProperty.js', 'npm:react-dom@15.4.2/lib/EventPluginRegistry.js', 'npm:react@15.4.2/lib/ReactComponentTreeHook.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var DOMProperty = $__require('npm:react-dom@15.4.2/lib/DOMProperty.js');
    var EventPluginRegistry = $__require('npm:react-dom@15.4.2/lib/EventPluginRegistry.js');
    var ReactComponentTreeHook = $__require('npm:react@15.4.2/lib/ReactComponentTreeHook.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    if ('production' !== 'production') {
      var reactProps = {
        children: true,
        dangerouslySetInnerHTML: true,
        key: true,
        ref: true,
        autoFocus: true,
        defaultValue: true,
        valueLink: true,
        defaultChecked: true,
        checkedLink: true,
        innerHTML: true,
        suppressContentEditableWarning: true,
        onFocusIn: true,
        onFocusOut: true
      };
      var warnedProperties = {};
      var validateProperty = function (tagName, name, debugID) {
        if (DOMProperty.properties.hasOwnProperty(name) || DOMProperty.isCustomAttribute(name)) {
          return true;
        }
        if (reactProps.hasOwnProperty(name) && reactProps[name] || warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
          return true;
        }
        if (EventPluginRegistry.registrationNameModules.hasOwnProperty(name)) {
          return true;
        }
        warnedProperties[name] = true;
        var lowerCasedName = name.toLowerCase();
        var standardName = DOMProperty.isCustomAttribute(lowerCasedName) ? lowerCasedName : DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ? DOMProperty.getPossibleStandardName[lowerCasedName] : null;
        var registrationName = EventPluginRegistry.possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? EventPluginRegistry.possibleRegistrationNames[lowerCasedName] : null;
        if (standardName != null) {
          'production' !== 'production' ? warning(false, 'Unknown DOM property %s. Did you mean %s?%s', name, standardName, ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
          return true;
        } else if (registrationName != null) {
          'production' !== 'production' ? warning(false, 'Unknown event handler property %s. Did you mean `%s`?%s', name, registrationName, ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
          return true;
        } else {
          return false;
        }
      };
    }
    var warnUnknownProperties = function (debugID, element) {
      var unknownProps = [];
      for (var key in element.props) {
        var isValid = validateProperty(element.type, key, debugID);
        if (!isValid) {
          unknownProps.push(key);
        }
      }
      var unknownPropString = unknownProps.map(function (prop) {
        return '`' + prop + '`';
      }).join(', ');
      if (unknownProps.length === 1) {
        'production' !== 'production' ? warning(false, 'Unknown prop %s on <%s> tag. Remove this prop from the element. ' + 'For details, see https://fb.me/react-unknown-prop%s', unknownPropString, element.type, ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
      } else if (unknownProps.length > 1) {
        'production' !== 'production' ? warning(false, 'Unknown props %s on <%s> tag. Remove these props from the element. ' + 'For details, see https://fb.me/react-unknown-prop%s', unknownPropString, element.type, ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
      }
    };
    function handleElement(debugID, element) {
      if (element == null || typeof element.type !== 'string') {
        return;
      }
      if (element.type.indexOf('-') >= 0 || element.props.is) {
        return;
      }
      warnUnknownProperties(debugID, element);
    }
    var ReactDOMUnknownPropertyHook = {
      onBeforeMountComponent: function (debugID, element) {
        handleElement(debugID, element);
      },
      onBeforeUpdateComponent: function (debugID, element) {
        handleElement(debugID, element);
      }
    };
    module.exports = ReactDOMUnknownPropertyHook;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactDOMNullInputValuePropHook.js', ['npm:react@15.4.2/lib/ReactComponentTreeHook.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var ReactComponentTreeHook = $__require('npm:react@15.4.2/lib/ReactComponentTreeHook.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var didWarnValueNull = false;
    function handleElement(debugID, element) {
      if (element == null) {
        return;
      }
      if (element.type !== 'input' && element.type !== 'textarea' && element.type !== 'select') {
        return;
      }
      if (element.props != null && element.props.value === null && !didWarnValueNull) {
        'production' !== 'production' ? warning(false, '`value` prop on `%s` should not be null. ' + 'Consider using the empty string to clear the component or `undefined` ' + 'for uncontrolled components.%s', element.type, ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
        didWarnValueNull = true;
      }
    }
    var ReactDOMNullInputValuePropHook = {
      onBeforeMountComponent: function (debugID, element) {
        handleElement(debugID, element);
      },
      onBeforeUpdateComponent: function (debugID, element) {
        handleElement(debugID, element);
      }
    };
    module.exports = ReactDOMNullInputValuePropHook;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/reactProdInvariant.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */
  'use strict';

  /**
   * WARNING: DO NOT manually require this module.
   * This is a replacement for `invariant(...)` used by the error code system
   * and will _only_ be required by the corresponding babel pass.
   * It always throws.
   */

  var global = this || self,
      GLOBAL = global;
  function reactProdInvariant(code) {
    var argCount = arguments.length - 1;

    var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

    for (var argIdx = 0; argIdx < argCount; argIdx++) {
      message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
    }

    message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

    var error = new Error(message);
    error.name = 'Invariant Violation';
    error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

    throw error;
  }

  module.exports = reactProdInvariant;
});
System.registerDynamic('npm:react-dom@15.4.2/lib/DOMProperty.js', ['npm:react-dom@15.4.2/lib/reactProdInvariant.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react-dom@15.4.2/lib/reactProdInvariant.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    function checkMask(value, bitmask) {
      return (value & bitmask) === bitmask;
    }
    var DOMPropertyInjection = {
      MUST_USE_PROPERTY: 0x1,
      HAS_BOOLEAN_VALUE: 0x4,
      HAS_NUMERIC_VALUE: 0x8,
      HAS_POSITIVE_NUMERIC_VALUE: 0x10 | 0x8,
      HAS_OVERLOADED_BOOLEAN_VALUE: 0x20,
      injectDOMPropertyConfig: function (domPropertyConfig) {
        var Injection = DOMPropertyInjection;
        var Properties = domPropertyConfig.Properties || {};
        var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
        var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
        var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
        var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};
        if (domPropertyConfig.isCustomAttribute) {
          DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
        }
        for (var propName in Properties) {
          !!DOMProperty.properties.hasOwnProperty(propName) ? 'production' !== 'production' ? invariant(false, 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property \'%s\' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.', propName) : _prodInvariant('48', propName) : void 0;
          var lowerCased = propName.toLowerCase();
          var propConfig = Properties[propName];
          var propertyInfo = {
            attributeName: lowerCased,
            attributeNamespace: null,
            propertyName: propName,
            mutationMethod: null,
            mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
            hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
            hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
            hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
            hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE)
          };
          !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? 'production' !== 'production' ? invariant(false, 'DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s', propName) : _prodInvariant('50', propName) : void 0;
          if ('production' !== 'production') {
            DOMProperty.getPossibleStandardName[lowerCased] = propName;
          }
          if (DOMAttributeNames.hasOwnProperty(propName)) {
            var attributeName = DOMAttributeNames[propName];
            propertyInfo.attributeName = attributeName;
            if ('production' !== 'production') {
              DOMProperty.getPossibleStandardName[attributeName] = propName;
            }
          }
          if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
            propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
          }
          if (DOMPropertyNames.hasOwnProperty(propName)) {
            propertyInfo.propertyName = DOMPropertyNames[propName];
          }
          if (DOMMutationMethods.hasOwnProperty(propName)) {
            propertyInfo.mutationMethod = DOMMutationMethods[propName];
          }
          DOMProperty.properties[propName] = propertyInfo;
        }
      }
    };
    var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
    var DOMProperty = {
      ID_ATTRIBUTE_NAME: 'data-reactid',
      ROOT_ATTRIBUTE_NAME: 'data-reactroot',
      ATTRIBUTE_NAME_START_CHAR: ATTRIBUTE_NAME_START_CHAR,
      ATTRIBUTE_NAME_CHAR: ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',
      properties: {},
      getPossibleStandardName: 'production' !== 'production' ? { autofocus: 'autoFocus' } : null,
      _isCustomAttributeFunctions: [],
      isCustomAttribute: function (attributeName) {
        for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
          var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
          if (isCustomAttributeFn(attributeName)) {
            return true;
          }
        }
        return false;
      },
      injection: DOMPropertyInjection
    };
    module.exports = DOMProperty;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react@15.4.2/lib/reactProdInvariant.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */
  'use strict';

  /**
   * WARNING: DO NOT manually require this module.
   * This is a replacement for `invariant(...)` used by the error code system
   * and will _only_ be required by the corresponding babel pass.
   * It always throws.
   */

  var global = this || self,
      GLOBAL = global;
  function reactProdInvariant(code) {
    var argCount = arguments.length - 1;

    var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

    for (var argIdx = 0; argIdx < argCount; argIdx++) {
      message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
    }

    message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

    var error = new Error(message);
    error.name = 'Invariant Violation';
    error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

    throw error;
  }

  module.exports = reactProdInvariant;
});
System.registerDynamic('npm:react@15.4.2/lib/ReactCurrentOwner.js', [], true, function ($__require, exports, module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */

  'use strict';

  /**
   * Keeps track of the current owner.
   *
   * The current owner is the component who should own any components that are
   * currently being constructed.
   */

  var global = this || self,
      GLOBAL = global;
  var ReactCurrentOwner = {

    /**
     * @internal
     * @type {ReactComponent}
     */
    current: null

  };

  module.exports = ReactCurrentOwner;
});
System.registerDynamic('npm:fbjs@0.8.9/lib/invariant.js', ['github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var validateFormat = function validateFormat(format) {};
    if ('production' !== 'production') {
      validateFormat = function validateFormat(format) {
        if (format === undefined) {
          throw new Error('invariant requires an error message argument');
        }
      };
    }
    function invariant(condition, format, a, b, c, d, e, f) {
      validateFormat(format);
      if (!condition) {
        var error;
        if (format === undefined) {
          error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(format.replace(/%s/g, function () {
            return args[argIndex++];
          }));
          error.name = 'Invariant Violation';
        }
        error.framesToPop = 1;
        throw error;
      }
    }
    module.exports = invariant;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react@15.4.2/lib/ReactComponentTreeHook.js', ['npm:react@15.4.2/lib/reactProdInvariant.js', 'npm:react@15.4.2/lib/ReactCurrentOwner.js', 'npm:fbjs@0.8.9/lib/invariant.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var _prodInvariant = $__require('npm:react@15.4.2/lib/reactProdInvariant.js');
    var ReactCurrentOwner = $__require('npm:react@15.4.2/lib/ReactCurrentOwner.js');
    var invariant = $__require('npm:fbjs@0.8.9/lib/invariant.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    function isNative(fn) {
      var funcToString = Function.prototype.toString;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
      try {
        var source = funcToString.call(fn);
        return reIsNative.test(source);
      } catch (err) {
        return false;
      }
    }
    var canUseCollections = typeof Array.from === 'function' && typeof Map === 'function' && isNative(Map) && Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) && typeof Set === 'function' && isNative(Set) && Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);
    var setItem;
    var getItem;
    var removeItem;
    var getItemIDs;
    var addRoot;
    var removeRoot;
    var getRootIDs;
    if (canUseCollections) {
      var itemMap = new Map();
      var rootIDSet = new Set();
      setItem = function (id, item) {
        itemMap.set(id, item);
      };
      getItem = function (id) {
        return itemMap.get(id);
      };
      removeItem = function (id) {
        itemMap['delete'](id);
      };
      getItemIDs = function () {
        return Array.from(itemMap.keys());
      };
      addRoot = function (id) {
        rootIDSet.add(id);
      };
      removeRoot = function (id) {
        rootIDSet['delete'](id);
      };
      getRootIDs = function () {
        return Array.from(rootIDSet.keys());
      };
    } else {
      var itemByKey = {};
      var rootByKey = {};
      var getKeyFromID = function (id) {
        return '.' + id;
      };
      var getIDFromKey = function (key) {
        return parseInt(key.substr(1), 10);
      };
      setItem = function (id, item) {
        var key = getKeyFromID(id);
        itemByKey[key] = item;
      };
      getItem = function (id) {
        var key = getKeyFromID(id);
        return itemByKey[key];
      };
      removeItem = function (id) {
        var key = getKeyFromID(id);
        delete itemByKey[key];
      };
      getItemIDs = function () {
        return Object.keys(itemByKey).map(getIDFromKey);
      };
      addRoot = function (id) {
        var key = getKeyFromID(id);
        rootByKey[key] = true;
      };
      removeRoot = function (id) {
        var key = getKeyFromID(id);
        delete rootByKey[key];
      };
      getRootIDs = function () {
        return Object.keys(rootByKey).map(getIDFromKey);
      };
    }
    var unmountedIDs = [];
    function purgeDeep(id) {
      var item = getItem(id);
      if (item) {
        var childIDs = item.childIDs;
        removeItem(id);
        childIDs.forEach(purgeDeep);
      }
    }
    function describeComponentFrame(name, source, ownerName) {
      return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
    }
    function getDisplayName(element) {
      if (element == null) {
        return '#empty';
      } else if (typeof element === 'string' || typeof element === 'number') {
        return '#text';
      } else if (typeof element.type === 'string') {
        return element.type;
      } else {
        return element.type.displayName || element.type.name || 'Unknown';
      }
    }
    function describeID(id) {
      var name = ReactComponentTreeHook.getDisplayName(id);
      var element = ReactComponentTreeHook.getElement(id);
      var ownerID = ReactComponentTreeHook.getOwnerID(id);
      var ownerName;
      if (ownerID) {
        ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
      }
      'production' !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
      return describeComponentFrame(name, element && element._source, ownerName);
    }
    var ReactComponentTreeHook = {
      onSetChildren: function (id, nextChildIDs) {
        var item = getItem(id);
        !item ? 'production' !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
        item.childIDs = nextChildIDs;
        for (var i = 0; i < nextChildIDs.length; i++) {
          var nextChildID = nextChildIDs[i];
          var nextChild = getItem(nextChildID);
          !nextChild ? 'production' !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
          !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? 'production' !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
          !nextChild.isMounted ? 'production' !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
          if (nextChild.parentID == null) {
            nextChild.parentID = id;
          }
          !(nextChild.parentID === id) ? 'production' !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
        }
      },
      onBeforeMountComponent: function (id, element, parentID) {
        var item = {
          element: element,
          parentID: parentID,
          text: null,
          childIDs: [],
          isMounted: false,
          updateCount: 0
        };
        setItem(id, item);
      },
      onBeforeUpdateComponent: function (id, element) {
        var item = getItem(id);
        if (!item || !item.isMounted) {
          return;
        }
        item.element = element;
      },
      onMountComponent: function (id) {
        var item = getItem(id);
        !item ? 'production' !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
        item.isMounted = true;
        var isRoot = item.parentID === 0;
        if (isRoot) {
          addRoot(id);
        }
      },
      onUpdateComponent: function (id) {
        var item = getItem(id);
        if (!item || !item.isMounted) {
          return;
        }
        item.updateCount++;
      },
      onUnmountComponent: function (id) {
        var item = getItem(id);
        if (item) {
          item.isMounted = false;
          var isRoot = item.parentID === 0;
          if (isRoot) {
            removeRoot(id);
          }
        }
        unmountedIDs.push(id);
      },
      purgeUnmountedComponents: function () {
        if (ReactComponentTreeHook._preventPurging) {
          return;
        }
        for (var i = 0; i < unmountedIDs.length; i++) {
          var id = unmountedIDs[i];
          purgeDeep(id);
        }
        unmountedIDs.length = 0;
      },
      isMounted: function (id) {
        var item = getItem(id);
        return item ? item.isMounted : false;
      },
      getCurrentStackAddendum: function (topElement) {
        var info = '';
        if (topElement) {
          var name = getDisplayName(topElement);
          var owner = topElement._owner;
          info += describeComponentFrame(name, topElement._source, owner && owner.getName());
        }
        var currentOwner = ReactCurrentOwner.current;
        var id = currentOwner && currentOwner._debugID;
        info += ReactComponentTreeHook.getStackAddendumByID(id);
        return info;
      },
      getStackAddendumByID: function (id) {
        var info = '';
        while (id) {
          info += describeID(id);
          id = ReactComponentTreeHook.getParentID(id);
        }
        return info;
      },
      getChildIDs: function (id) {
        var item = getItem(id);
        return item ? item.childIDs : [];
      },
      getDisplayName: function (id) {
        var element = ReactComponentTreeHook.getElement(id);
        if (!element) {
          return null;
        }
        return getDisplayName(element);
      },
      getElement: function (id) {
        var item = getItem(id);
        return item ? item.element : null;
      },
      getOwnerID: function (id) {
        var element = ReactComponentTreeHook.getElement(id);
        if (!element || !element._owner) {
          return null;
        }
        return element._owner._debugID;
      },
      getParentID: function (id) {
        var item = getItem(id);
        return item ? item.parentID : null;
      },
      getSource: function (id) {
        var item = getItem(id);
        var element = item ? item.element : null;
        var source = element != null ? element._source : null;
        return source;
      },
      getText: function (id) {
        var element = ReactComponentTreeHook.getElement(id);
        if (typeof element === 'string') {
          return element;
        } else if (typeof element === 'number') {
          return '' + element;
        } else {
          return null;
        }
      },
      getUpdateCount: function (id) {
        var item = getItem(id);
        return item ? item.updateCount : 0;
      },
      getRootIDs: getRootIDs,
      getRegisteredIDs: getItemIDs
    };
    module.exports = ReactComponentTreeHook;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic("npm:fbjs@0.8.9/lib/emptyFunction.js", [], true, function ($__require, exports, module) {
  /* */
  "use strict";

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * 
   */

  var global = this || self,
      GLOBAL = global;
  function makeEmptyFunction(arg) {
    return function () {
      return arg;
    };
  }

  /**
   * This function accepts and discards inputs; it has no side effects. This is
   * primarily useful idiomatically for overridable function endpoints which
   * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
   */
  var emptyFunction = function emptyFunction() {};

  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function () {
    return this;
  };
  emptyFunction.thatReturnsArgument = function (arg) {
    return arg;
  };

  module.exports = emptyFunction;
});
System.registerDynamic('npm:fbjs@0.8.9/lib/warning.js', ['npm:fbjs@0.8.9/lib/emptyFunction.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var emptyFunction = $__require('npm:fbjs@0.8.9/lib/emptyFunction.js');
    var warning = emptyFunction;
    if ('production' !== 'production') {
      (function () {
        var printWarning = function printWarning(format) {
          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
          });
          if (typeof console !== 'undefined') {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {}
        };
        warning = function warning(condition, format) {
          if (format === undefined) {
            throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
          }
          if (format.indexOf('Failed Composite propType: ') === 0) {
            return;
          }
          if (!condition) {
            for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              args[_key2 - 2] = arguments[_key2];
            }
            printWarning.apply(undefined, [format].concat(args));
          }
        };
      })();
    }
    module.exports = warning;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactDOMInvalidARIAHook.js', ['npm:react-dom@15.4.2/lib/DOMProperty.js', 'npm:react@15.4.2/lib/ReactComponentTreeHook.js', 'npm:fbjs@0.8.9/lib/warning.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var DOMProperty = $__require('npm:react-dom@15.4.2/lib/DOMProperty.js');
    var ReactComponentTreeHook = $__require('npm:react@15.4.2/lib/ReactComponentTreeHook.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    var warnedProperties = {};
    var rARIA = new RegExp('^(aria)-[' + DOMProperty.ATTRIBUTE_NAME_CHAR + ']*$');
    function validateProperty(tagName, name, debugID) {
      if (warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
        return true;
      }
      if (rARIA.test(name)) {
        var lowerCasedName = name.toLowerCase();
        var standardName = DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ? DOMProperty.getPossibleStandardName[lowerCasedName] : null;
        if (standardName == null) {
          warnedProperties[name] = true;
          return false;
        }
        if (name !== standardName) {
          'production' !== 'production' ? warning(false, 'Unknown ARIA attribute %s. Did you mean %s?%s', name, standardName, ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
          warnedProperties[name] = true;
          return true;
        }
      }
      return true;
    }
    function warnInvalidARIAProps(debugID, element) {
      var invalidProps = [];
      for (var key in element.props) {
        var isValid = validateProperty(element.type, key, debugID);
        if (!isValid) {
          invalidProps.push(key);
        }
      }
      var unknownPropString = invalidProps.map(function (prop) {
        return '`' + prop + '`';
      }).join(', ');
      if (invalidProps.length === 1) {
        'production' !== 'production' ? warning(false, 'Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, element.type, ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
      } else if (invalidProps.length > 1) {
        'production' !== 'production' ? warning(false, 'Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop%s', unknownPropString, element.type, ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
      }
    }
    function handleElement(debugID, element) {
      if (element == null || typeof element.type !== 'string') {
        return;
      }
      if (element.type.indexOf('-') >= 0 || element.props.is) {
        return;
      }
      warnInvalidARIAProps(debugID, element);
    }
    var ReactDOMInvalidARIAHook = {
      onBeforeMountComponent: function (debugID, element) {
        if ('production' !== 'production') {
          handleElement(debugID, element);
        }
      },
      onBeforeUpdateComponent: function (debugID, element) {
        if ('production' !== 'production') {
          handleElement(debugID, element);
        }
      }
    };
    module.exports = ReactDOMInvalidARIAHook;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:process@0.11.9/browser.js', [], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    // shim for using process in browser
    var process = module.exports = {};

    // cached from whatever global is present so that test runners that stub it
    // don't break things.  But we need to wrap it in a try catch in case it is
    // wrapped in strict mode code which doesn't define any globals.  It's inside a
    // function because try/catches deoptimize in certain engines.

    var cachedSetTimeout;
    var cachedClearTimeout;

    function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
    }
    function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
    }
    (function () {
        try {
            if (typeof setTimeout === 'function') {
                cachedSetTimeout = setTimeout;
            } else {
                cachedSetTimeout = defaultSetTimout;
            }
        } catch (e) {
            cachedSetTimeout = defaultSetTimout;
        }
        try {
            if (typeof clearTimeout === 'function') {
                cachedClearTimeout = clearTimeout;
            } else {
                cachedClearTimeout = defaultClearTimeout;
            }
        } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
        }
    })();
    function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                return cachedSetTimeout.call(this, fun, 0);
            }
        }
    }
    function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
            //normal enviroments in sane situations
            return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
        }
        try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
        } catch (e) {
            try {
                // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                return cachedClearTimeout.call(null, marker);
            } catch (e) {
                // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                return cachedClearTimeout.call(this, marker);
            }
        }
    }
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
        if (!draining || !currentQueue) {
            return;
        }
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }

    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
    }

    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
        }
    };

    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {};
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};

    function noop() {}

    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;

    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };

    process.cwd = function () {
        return '/';
    };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function () {
        return 0;
    };
});
System.registerDynamic("npm:process@0.11.9.js", ["npm:process@0.11.9/browser.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:process@0.11.9/browser.js");
});
System.registerDynamic('github:jspm/nodelibs-process@0.1.2/index.js', ['npm:process@0.11.9.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = System._nodeRequire ? process : $__require('npm:process@0.11.9.js');
});
System.registerDynamic("github:jspm/nodelibs-process@0.1.2.js", ["github:jspm/nodelibs-process@0.1.2/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("github:jspm/nodelibs-process@0.1.2/index.js");
});
System.registerDynamic('npm:react-dom@15.4.2/lib/ReactDOM.js', ['npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js', 'npm:react-dom@15.4.2/lib/ReactDefaultInjection.js', 'npm:react-dom@15.4.2/lib/ReactMount.js', 'npm:react-dom@15.4.2/lib/ReactReconciler.js', 'npm:react-dom@15.4.2/lib/ReactUpdates.js', 'npm:react-dom@15.4.2/lib/ReactVersion.js', 'npm:react-dom@15.4.2/lib/findDOMNode.js', 'npm:react-dom@15.4.2/lib/getHostComponentFromComposite.js', 'npm:react-dom@15.4.2/lib/renderSubtreeIntoContainer.js', 'npm:fbjs@0.8.9/lib/warning.js', 'npm:fbjs@0.8.9/lib/ExecutionEnvironment.js', 'npm:react-dom@15.4.2/lib/ReactInstrumentation.js', 'npm:react-dom@15.4.2/lib/ReactDOMUnknownPropertyHook.js', 'npm:react-dom@15.4.2/lib/ReactDOMNullInputValuePropHook.js', 'npm:react-dom@15.4.2/lib/ReactDOMInvalidARIAHook.js', 'github:jspm/nodelibs-process@0.1.2.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /* */
  (function (process) {
    'use strict';

    var ReactDOMComponentTree = $__require('npm:react-dom@15.4.2/lib/ReactDOMComponentTree.js');
    var ReactDefaultInjection = $__require('npm:react-dom@15.4.2/lib/ReactDefaultInjection.js');
    var ReactMount = $__require('npm:react-dom@15.4.2/lib/ReactMount.js');
    var ReactReconciler = $__require('npm:react-dom@15.4.2/lib/ReactReconciler.js');
    var ReactUpdates = $__require('npm:react-dom@15.4.2/lib/ReactUpdates.js');
    var ReactVersion = $__require('npm:react-dom@15.4.2/lib/ReactVersion.js');
    var findDOMNode = $__require('npm:react-dom@15.4.2/lib/findDOMNode.js');
    var getHostComponentFromComposite = $__require('npm:react-dom@15.4.2/lib/getHostComponentFromComposite.js');
    var renderSubtreeIntoContainer = $__require('npm:react-dom@15.4.2/lib/renderSubtreeIntoContainer.js');
    var warning = $__require('npm:fbjs@0.8.9/lib/warning.js');
    ReactDefaultInjection.inject();
    var ReactDOM = {
      findDOMNode: findDOMNode,
      render: ReactMount.render,
      unmountComponentAtNode: ReactMount.unmountComponentAtNode,
      version: ReactVersion,
      unstable_batchedUpdates: ReactUpdates.batchedUpdates,
      unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
        ComponentTree: {
          getClosestInstanceFromNode: ReactDOMComponentTree.getClosestInstanceFromNode,
          getNodeFromInstance: function (inst) {
            if (inst._renderedComponent) {
              inst = getHostComponentFromComposite(inst);
            }
            if (inst) {
              return ReactDOMComponentTree.getNodeFromInstance(inst);
            } else {
              return null;
            }
          }
        },
        Mount: ReactMount,
        Reconciler: ReactReconciler
      });
    }
    if ('production' !== 'production') {
      var ExecutionEnvironment = $__require('npm:fbjs@0.8.9/lib/ExecutionEnvironment.js');
      if (ExecutionEnvironment.canUseDOM && window.top === window.self) {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
          if (navigator.userAgent.indexOf('Chrome') > -1 && navigator.userAgent.indexOf('Edge') === -1 || navigator.userAgent.indexOf('Firefox') > -1) {
            var showFileUrlMessage = window.location.protocol.indexOf('http') === -1 && navigator.userAgent.indexOf('Firefox') === -1;
            console.debug('Download the React DevTools ' + (showFileUrlMessage ? 'and use an HTTP server (instead of a file: URL) ' : '') + 'for a better development experience: ' + 'https://fb.me/react-devtools');
          }
        }
        var testFunc = function testFn() {};
        'production' !== 'production' ? warning((testFunc.name || testFunc.toString()).indexOf('testFn') !== -1, 'It looks like you\'re using a minified copy of the development build ' + 'of React. When deploying React apps to production, make sure to use ' + 'the production build which skips development warnings and is faster. ' + 'See https://fb.me/react-minification for more details.') : void 0;
        var ieCompatibilityMode = document.documentMode && document.documentMode < 8;
        'production' !== 'production' ? warning(!ieCompatibilityMode, 'Internet Explorer is running in compatibility mode; please add the ' + 'following tag to your HTML to prevent this from happening: ' + '<meta http-equiv="X-UA-Compatible" content="IE=edge" />') : void 0;
        var expectedFeatures = [Array.isArray, Array.prototype.every, Array.prototype.forEach, Array.prototype.indexOf, Array.prototype.map, Date.now, Function.prototype.bind, Object.keys, String.prototype.trim];
        for (var i = 0; i < expectedFeatures.length; i++) {
          if (!expectedFeatures[i]) {
            'production' !== 'production' ? warning(false, 'One or more ES5 shims expected by React are not available: ' + 'https://fb.me/react-warning-polyfills') : void 0;
            break;
          }
        }
      }
    }
    if ('production' !== 'production') {
      var ReactInstrumentation = $__require('npm:react-dom@15.4.2/lib/ReactInstrumentation.js');
      var ReactDOMUnknownPropertyHook = $__require('npm:react-dom@15.4.2/lib/ReactDOMUnknownPropertyHook.js');
      var ReactDOMNullInputValuePropHook = $__require('npm:react-dom@15.4.2/lib/ReactDOMNullInputValuePropHook.js');
      var ReactDOMInvalidARIAHook = $__require('npm:react-dom@15.4.2/lib/ReactDOMInvalidARIAHook.js');
      ReactInstrumentation.debugTool.addHook(ReactDOMUnknownPropertyHook);
      ReactInstrumentation.debugTool.addHook(ReactDOMNullInputValuePropHook);
      ReactInstrumentation.debugTool.addHook(ReactDOMInvalidARIAHook);
    }
    module.exports = ReactDOM;
  })($__require('github:jspm/nodelibs-process@0.1.2.js'));
});
System.registerDynamic('npm:react-dom@15.4.2/index.js', ['npm:react-dom@15.4.2/lib/ReactDOM.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var global = this || self,
      GLOBAL = global;
  module.exports = $__require('npm:react-dom@15.4.2/lib/ReactDOM.js');
});
System.registerDynamic("npm:react-dom@15.4.2.js", ["npm:react-dom@15.4.2/index.js"], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = $__require("npm:react-dom@15.4.2/index.js");
});
System.register('app/main.js', ['npm:react@15.4.2.js', 'npm:react-dom@15.4.2.js'], function (_export) {
  'use strict';

  var React, ReactDom;
  return {
    setters: [function (_npmReact1542Js) {
      React = _npmReact1542Js['default'];
    }, function (_npmReactDom1542Js) {
      ReactDom = _npmReactDom1542Js['default'];
    }],
    execute: function () {

      ReactDom.render(React.createElement(
        'h1',
        null,
        'hello jspm'
      ), document.getElementById('app'));
    }
  };
});
//# sourceMappingURL=bundle.js.map