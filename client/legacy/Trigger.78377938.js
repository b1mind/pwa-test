import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, H as create_slot, x as onMount, v as validate_slots, I as beforeUpdate, J as globals, g as element, h as claim_element, j as children, l as detach_dev, m as attr_dev, n as add_location, o as insert_dev, r as _slicedToArray, K as update_slot, E as transition_in, F as transition_out, L as binding_callbacks } from './client.4cf9d8e0.js';
import { g as gsapWithCSS, S as ScrollTrigger } from './ScrollTrigger.96d98132.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var console_1 = globals.console;
var file = "src\\components\\shared\\Trigger.svelte";

function create_fragment(ctx) {
  var div;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[2].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[1], null);
  var block = {
    c: function create() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "triggered svelte-15wlzz0");
      add_location(div, file, 25, 0, 628);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      if (default_slot) {
        default_slot.m(div, null);
      }
      /*div_binding*/


      ctx[3](div);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        2) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[1], dirty, null, null);
        }
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

      ctx[3](null);
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
  var target;
  onMount(function () {
    gsapWithCSS.registerPlugin(ScrollTrigger);
    var st = ScrollTrigger.create({
      trigger: target,
      pin: true,
      scrub: true,
      animation: gsapWithCSS.from(target.children, {
        autoAlpha: 0,
        x: "+=100",
        stagger: 0.3
      }),
      start: "center center",
      toggleActions: "play none none reverse"
    }); //markers: true,

    return function () {
      console.log(ScrollTrigger.getAll());
      st.kill();
    };
  });
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn("<Trigger> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Trigger", $$slots, ['default']);

  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      $$invalidate(0, target = $$value);
    });
  }

  $$self.$set = function ($$props) {
    if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      beforeUpdate: beforeUpdate,
      onMount: onMount,
      gsap: gsapWithCSS,
      ScrollTrigger: ScrollTrigger,
      target: target
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("target" in $$props) $$invalidate(0, target = $$props.target);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [target, $$scope, $$slots, div_binding];
}

var Trigger = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Trigger, _SvelteComponentDev);

  var _super = _createSuper(Trigger);

  function Trigger(options) {
    var _this;

    _classCallCheck(this, Trigger);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Trigger",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Trigger;
}(SvelteComponentDev);

export { Trigger as T };
