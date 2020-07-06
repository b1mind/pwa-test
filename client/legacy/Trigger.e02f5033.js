import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, H as create_slot, x as onMount, I as ScrollTrigger, v as validate_slots, J as afterUpdate, K as gsapWithCSS, L as globals, g as element, h as claim_element, j as children, l as detach_dev, m as attr_dev, n as add_location, o as insert_dev, r as _slicedToArray, M as update_slot, E as transition_in, F as transition_out, N as binding_callbacks } from './client.9dceeb83.js';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var console_1 = globals.console;
var file = "src\\components\\shared\\Trigger.svelte";

function create_fragment(ctx) {
  var div;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[10].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[9], null);
  var block = {
    c: function create() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true,
        pin: true,
        scrub: true,
        tweenType: true,
        tween: true,
        start: true,
        end: true
      });
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "triggered svelte-15wlzz0");
      attr_dev(div, "pin",
      /*pin*/
      ctx[4]);
      attr_dev(div, "scrub",
      /*scrub*/
      ctx[5]);
      attr_dev(div, "tweentype",
      /*tweenType*/
      ctx[1]);
      attr_dev(div, "tween",
      /*tween*/
      ctx[0]);
      attr_dev(div, "start",
      /*start*/
      ctx[2]);
      attr_dev(div, "end",
      /*end*/
      ctx[3]);
      add_location(div, file, 39, 0, 890);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }
      /*div_binding*/


      ctx[11](div);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        512) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[9], dirty, null, null);
        }
      }

      if (!current || dirty &
      /*pin*/
      16) {
        attr_dev(div, "pin",
        /*pin*/
        ctx[4]);
      }

      if (!current || dirty &
      /*scrub*/
      32) {
        attr_dev(div, "scrub",
        /*scrub*/
        ctx[5]);
      }

      if (!current || dirty &
      /*tweenType*/
      2) {
        attr_dev(div, "tweentype",
        /*tweenType*/
        ctx[1]);
      }

      if (!current || dirty &
      /*tween*/
      1) {
        attr_dev(div, "tween",
        /*tween*/
        ctx[0]);
      }

      if (!current || dirty &
      /*start*/
      4) {
        attr_dev(div, "start",
        /*start*/
        ctx[2]);
      }

      if (!current || dirty &
      /*end*/
      8) {
        attr_dev(div, "end",
        /*end*/
        ctx[3]);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (default_slot) default_slot.d(detaching);
      /*div_binding*/

      ctx[11](null);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$tween = $$props.tween,
      tween = _$$props$tween === void 0 ? {
    autoAlpha: 0,
    x: "+=100",
    stagger: 0.3
  } : _$$props$tween;
  var _$$props$tweenType = $$props.tweenType,
      tweenType = _$$props$tweenType === void 0 ? "from" : _$$props$tweenType;
  var _$$props$start = $$props.start,
      start = _$$props$start === void 0 ? "center center" : _$$props$start;
  var _$$props$end = $$props.end,
      end = _$$props$end === void 0 ? "bottom top" : _$$props$end;
  var _$$props$pin = $$props.pin,
      pin = _$$props$pin === void 0 ? true : _$$props$pin;
  var _$$props$scrub = $$props.scrub,
      scrub = _$$props$scrub === void 0 ? true : _$$props$scrub;
  var target;
  var st;

  function MakeTrigger() {
    st = ScrollTrigger.create({
      trigger: target,
      pin: pin,
      scrub: scrub,
      animation: gsapWithCSS[tweenType](target.children, _objectSpread({}, tween)),
      start: start,
      end: end,
      toggleActions: "play none none reverse"
    }); //markers: true,
  }

  onMount(function () {
    MakeTrigger();
    return function () {
      console.log(ScrollTrigger.getAll());
      st.kill();
    };
  });
  var writable_props = ["tween", "tweenType", "start", "end", "pin", "scrub"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn("<Trigger> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Trigger", $$slots, ['default']);

  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(6, target = $$value);
    });
  }

  $$self.$set = function ($$props) {
    if ("tween" in $$props) $$invalidate(0, tween = $$props.tween);
    if ("tweenType" in $$props) $$invalidate(1, tweenType = $$props.tweenType);
    if ("start" in $$props) $$invalidate(2, start = $$props.start);
    if ("end" in $$props) $$invalidate(3, end = $$props.end);
    if ("pin" in $$props) $$invalidate(4, pin = $$props.pin);
    if ("scrub" in $$props) $$invalidate(5, scrub = $$props.scrub);
    if ("$$scope" in $$props) $$invalidate(9, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      afterUpdate: afterUpdate,
      onMount: onMount,
      gsap: gsapWithCSS,
      ScrollTrigger: ScrollTrigger,
      tween: tween,
      tweenType: tweenType,
      start: start,
      end: end,
      pin: pin,
      scrub: scrub,
      target: target,
      st: st,
      MakeTrigger: MakeTrigger
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("tween" in $$props) $$invalidate(0, tween = $$props.tween);
    if ("tweenType" in $$props) $$invalidate(1, tweenType = $$props.tweenType);
    if ("start" in $$props) $$invalidate(2, start = $$props.start);
    if ("end" in $$props) $$invalidate(3, end = $$props.end);
    if ("pin" in $$props) $$invalidate(4, pin = $$props.pin);
    if ("scrub" in $$props) $$invalidate(5, scrub = $$props.scrub);
    if ("target" in $$props) $$invalidate(6, target = $$props.target);
    if ("st" in $$props) st = $$props.st;
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [tween, tweenType, start, end, pin, scrub, target, st, MakeTrigger, $$scope, $$slots, div_binding];
}

var Trigger = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Trigger, _SvelteComponentDev);

  var _super = _createSuper(Trigger);

  function Trigger(options) {
    var _this;

    _classCallCheck(this, Trigger);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      tween: 0,
      tweenType: 1,
      start: 2,
      end: 3,
      pin: 4,
      scrub: 5
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Trigger",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Trigger, [{
    key: "tween",
    get: function get() {
      throw new Error("<Trigger>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Trigger>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "tweenType",
    get: function get() {
      throw new Error("<Trigger>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Trigger>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "start",
    get: function get() {
      throw new Error("<Trigger>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Trigger>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "end",
    get: function get() {
      throw new Error("<Trigger>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Trigger>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "pin",
    get: function get() {
      throw new Error("<Trigger>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Trigger>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "scrub",
    get: function get() {
      throw new Error("<Trigger>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Trigger>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Trigger;
}(SvelteComponentDev);

export { Trigger as T, _defineProperty as _ };
