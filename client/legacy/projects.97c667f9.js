import { K as gsapWithCSS, I as ScrollTrigger, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, O as assign, x as onMount, v as validate_slots, P as onDestroy, Q as beforeUpdate, J as afterUpdate, L as globals, y as space, g as element, t as text, z as create_component, A as query_selector_all, l as detach_dev, B as claim_space, h as claim_element, j as children, k as claim_text, C as claim_component, n as add_location, m as attr_dev, R as set_attributes, T as toggle_class, o as insert_dev, p as append_dev, D as mount_component, U as action_destroyer, q as listen_dev, r as _slicedToArray, V as is_function, u as set_data_dev, W as get_spread_update, E as transition_in, F as transition_out, G as destroy_component, X as run_all } from './client.9dceeb83.js';
import { _ as _defineProperty, T as Trigger } from './Trigger.e02f5033.js';
import { I as Icon, f as faArrowDown, a as faArrowsAlt, b as faFeather, c as faFish, d as faBacon } from './index.es.bb85308c.js';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function animate(node, _ref) {
  var type = _ref.type,
      args = _objectWithoutProperties(_ref, ["type"]);

  var method = gsapWithCSS[type];
  return method(node, args);
}
function triggerMe(node, _ref2) {
  var args = _extends({}, _ref2);

  var method = ScrollTrigger.create({
    trigger: node,
    animation: gsapWithCSS.from(node, args),
    start: 'center center',
    toggleActions: 'play none none reverse' //markers: true,

  });
  return method;
}
function newTrigger(node, _ref3) {
  var args = _extends({}, _ref3);

  var method = ScrollTrigger.create(_objectSpread({
    trigger: node,
    animation: gsapWithCSS.from(node, {
      duration: 1,
      opacity: 0,
      x: 100
    })
  }, args));
  return method;
}
function pinScrub(node, _ref4) {
  var args = _extends({}, _ref4);

  var st = ScrollTrigger.create({
    trigger: node,
    pin: true,
    scrub: true,
    animation: gsapWithCSS.from(node.children, _objectSpread({}, args)),
    start: 'center center',
    toggleActions: 'play none none reverse' //markers: true,

  });
  return st;
}
function killTriggers() {
  var allTriggers = ScrollTrigger.getAll();
  console.log(allTriggers);
  allTriggers.forEach(function (t) {
    t.kill();
  });
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var console_1 = globals.console;
var file = "src\\routes\\projects.svelte";

function create_fragment(ctx) {
  var t0;
  var p0;
  var t1;
  var animate_action;
  var t2;
  var p1;
  var t3;
  var animate_action_1;
  var t4;
  var h1;
  var t5;
  var t6;
  var t7;
  var t8;
  var t9;
  var t10;
  var div0;
  var t11;
  var t12;
  var div1;
  var p2;
  var t13;
  var triggerMe_action;
  var t14;
  var div2;
  var t15;
  var newTrigger_action;
  var t16;
  var div3;
  var p3;
  var t17;
  var t18;
  var p4;
  var t19;
  var t20;
  var p5;
  var t21;
  var pinScrub_action;
  var t22;
  var div4;
  var t23;
  var t24;
  var div5;
  var p6;
  var t25;
  var t26;
  var p7;
  var t27;
  var t28;
  var p8;
  var t29;
  var pinScrub_action_1;
  var t30;
  var div6;
  var t31;
  var t32;
  var div7;
  var p9;
  var t33;
  var t34;
  var p10;
  var t35;
  var t36;
  var p11;
  var t37;
  var pinScrub_action_2;
  var t38;
  var div8;
  var t39;
  var current;
  var mounted;
  var dispose;
  var icon0 = new Icon({
    props: {
      icon: faArrowDown
    },
    $$inline: true
  });
  var icon1 = new Icon({
    props: {
      icon: faArrowsAlt
    },
    $$inline: true
  });
  var icon2 = new Icon({
    props: {
      icon: faFeather
    },
    $$inline: true
  });
  var icon3 = new Icon({
    props: {
      icon: faFish
    },
    $$inline: true
  });
  var icon4 = new Icon({
    props: {
      icon: faBacon
    },
    $$inline: true
  });
  var div0_levels = [{
    class: "spacer"
  },
  /*data*/
  ctx[2]];
  var div0_data = {};

  for (var i = 0; i < div0_levels.length; i += 1) {
    div0_data = assign(div0_data, div0_levels[i]);
  }

  var block = {
    c: function create() {
      t0 = space();
      p0 = element("p");
      t1 = text("just some projects");
      t2 = space();
      p1 = element("p");
      create_component(icon0.$$.fragment);
      t3 = text("\n  you can use fontAwesome too !");
      t4 = space();
      h1 = element("h1");
      t5 = text(
      /*msg*/
      ctx[1]);
      t6 = space();
      create_component(icon1.$$.fragment);
      t7 = text("\nLink\n");
      create_component(icon2.$$.fragment);
      t8 = text("\nTest\n");
      create_component(icon3.$$.fragment);
      t9 = text("\nMore\n");
      create_component(icon4.$$.fragment);
      t10 = text("\nReally\n");
      div0 = element("div");
      t11 = text("test");
      t12 = space();
      div1 = element("div");
      p2 = element("p");
      t13 = text("testPin");
      t14 = space();
      div2 = element("div");
      t15 = text("test");
      t16 = space();
      div3 = element("div");
      p3 = element("p");
      t17 = text("test");
      t18 = space();
      p4 = element("p");
      t19 = text("test");
      t20 = space();
      p5 = element("p");
      t21 = text("test");
      t22 = space();
      div4 = element("div");
      t23 = text("test");
      t24 = space();
      div5 = element("div");
      p6 = element("p");
      t25 = text("test");
      t26 = space();
      p7 = element("p");
      t27 = text("test");
      t28 = space();
      p8 = element("p");
      t29 = text("test");
      t30 = space();
      div6 = element("div");
      t31 = text("test");
      t32 = space();
      div7 = element("div");
      p9 = element("p");
      t33 = text("test");
      t34 = space();
      p10 = element("p");
      t35 = text("test");
      t36 = space();
      p11 = element("p");
      t37 = text("test");
      t38 = space();
      div8 = element("div");
      t39 = text("test");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1en3a0b\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "just some projects");
      p0_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      claim_component(icon0.$$.fragment, p1_nodes);
      t3 = claim_text(p1_nodes, "\n  you can use fontAwesome too !");
      p1_nodes.forEach(detach_dev);
      t4 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t5 = claim_text(h1_nodes,
      /*msg*/
      ctx[1]);
      h1_nodes.forEach(detach_dev);
      t6 = claim_space(nodes);
      claim_component(icon1.$$.fragment, nodes);
      t7 = claim_text(nodes, "\nLink\n");
      claim_component(icon2.$$.fragment, nodes);
      t8 = claim_text(nodes, "\nTest\n");
      claim_component(icon3.$$.fragment, nodes);
      t9 = claim_text(nodes, "\nMore\n");
      claim_component(icon4.$$.fragment, nodes);
      t10 = claim_text(nodes, "\nReally\n");
      div0 = claim_element(nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      t11 = claim_text(div0_nodes, "test");
      div0_nodes.forEach(detach_dev);
      t12 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {
        id: true,
        class: true
      });
      var div1_nodes = children(div1);
      p2 = claim_element(div1_nodes, "P", {});
      var p2_nodes = children(p2);
      t13 = claim_text(p2_nodes, "testPin");
      p2_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t14 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      t15 = claim_text(div2_nodes, "test");
      div2_nodes.forEach(detach_dev);
      t16 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      p3 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p3_nodes = children(p3);
      t17 = claim_text(p3_nodes, "test");
      p3_nodes.forEach(detach_dev);
      t18 = claim_space(div3_nodes);
      p4 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p4_nodes = children(p4);
      t19 = claim_text(p4_nodes, "test");
      p4_nodes.forEach(detach_dev);
      t20 = claim_space(div3_nodes);
      p5 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p5_nodes = children(p5);
      t21 = claim_text(p5_nodes, "test");
      p5_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t22 = claim_space(nodes);
      div4 = claim_element(nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      t23 = claim_text(div4_nodes, "test");
      div4_nodes.forEach(detach_dev);
      t24 = claim_space(nodes);
      div5 = claim_element(nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      p6 = claim_element(div5_nodes, "P", {
        class: true
      });
      var p6_nodes = children(p6);
      t25 = claim_text(p6_nodes, "test");
      p6_nodes.forEach(detach_dev);
      t26 = claim_space(div5_nodes);
      p7 = claim_element(div5_nodes, "P", {
        class: true
      });
      var p7_nodes = children(p7);
      t27 = claim_text(p7_nodes, "test");
      p7_nodes.forEach(detach_dev);
      t28 = claim_space(div5_nodes);
      p8 = claim_element(div5_nodes, "P", {
        class: true
      });
      var p8_nodes = children(p8);
      t29 = claim_text(p8_nodes, "test");
      p8_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t30 = claim_space(nodes);
      div6 = claim_element(nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      t31 = claim_text(div6_nodes, "test");
      div6_nodes.forEach(detach_dev);
      t32 = claim_space(nodes);
      div7 = claim_element(nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      p9 = claim_element(div7_nodes, "P", {
        class: true
      });
      var p9_nodes = children(p9);
      t33 = claim_text(p9_nodes, "test");
      p9_nodes.forEach(detach_dev);
      t34 = claim_space(div7_nodes);
      p10 = claim_element(div7_nodes, "P", {
        class: true
      });
      var p10_nodes = children(p10);
      t35 = claim_text(p10_nodes, "test");
      p10_nodes.forEach(detach_dev);
      t36 = claim_space(div7_nodes);
      p11 = claim_element(div7_nodes, "P", {
        class: true
      });
      var p11_nodes = children(p11);
      t37 = claim_text(p11_nodes, "test");
      p11_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      t38 = claim_space(nodes);
      div8 = claim_element(nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      t39 = claim_text(div8_nodes, "test");
      div8_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Projects";
      add_location(p0, file, 34, 0, 969);
      add_location(p1, file, 35, 0, 1060);
      attr_dev(h1, "class", "test");
      add_location(h1, file, 46, 0, 1576);
      set_attributes(div0, div0_data);
      toggle_class(div0, "svelte-8w8xtt", true);
      add_location(div0, file, 55, 0, 1748);
      add_location(p2, file, 57, 2, 1877);
      attr_dev(div1, "id", "anchor");
      attr_dev(div1, "class", "trigger");
      add_location(div1, file, 56, 0, 1789);
      attr_dev(div2, "class", "spacer svelte-8w8xtt");
      add_location(div2, file, 59, 0, 1899);
      attr_dev(p3, "class", "svelte-8w8xtt");
      add_location(p3, file, 61, 2, 2093);
      attr_dev(p4, "class", "svelte-8w8xtt");
      add_location(p4, file, 62, 2, 2107);
      attr_dev(p5, "class", "svelte-8w8xtt");
      add_location(p5, file, 63, 2, 2121);
      attr_dev(div3, "class", "pinned svelte-8w8xtt");
      add_location(div3, file, 60, 0, 2012);
      attr_dev(div4, "class", "spacer svelte-8w8xtt");
      add_location(div4, file, 65, 0, 2140);
      attr_dev(p6, "class", "svelte-8w8xtt");
      add_location(p6, file, 67, 2, 2252);
      attr_dev(p7, "class", "svelte-8w8xtt");
      add_location(p7, file, 68, 2, 2266);
      attr_dev(p8, "class", "svelte-8w8xtt");
      add_location(p8, file, 69, 2, 2280);
      attr_dev(div5, "class", "pinned svelte-8w8xtt");
      add_location(div5, file, 66, 0, 2171);
      attr_dev(div6, "class", "spacer svelte-8w8xtt");
      add_location(div6, file, 71, 0, 2299);
      attr_dev(p9, "class", "svelte-8w8xtt");
      add_location(p9, file, 73, 2, 2411);
      attr_dev(p10, "class", "svelte-8w8xtt");
      add_location(p10, file, 74, 2, 2425);
      attr_dev(p11, "class", "svelte-8w8xtt");
      add_location(p11, file, 75, 2, 2439);
      attr_dev(div7, "class", "pinned svelte-8w8xtt");
      add_location(div7, file, 72, 0, 2330);
      attr_dev(div8, "class", "spacer svelte-8w8xtt");
      add_location(div8, file, 77, 0, 2458);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, p0, anchor);
      append_dev(p0, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, p1, anchor);
      mount_component(icon0, p1, null);
      append_dev(p1, t3);
      insert_dev(target, t4, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t5);
      insert_dev(target, t6, anchor);
      mount_component(icon1, target, anchor);
      insert_dev(target, t7, anchor);
      mount_component(icon2, target, anchor);
      insert_dev(target, t8, anchor);
      mount_component(icon3, target, anchor);
      insert_dev(target, t9, anchor);
      mount_component(icon4, target, anchor);
      insert_dev(target, t10, anchor);
      insert_dev(target, div0, anchor);
      append_dev(div0, t11);
      insert_dev(target, t12, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, p2);
      append_dev(p2, t13);
      insert_dev(target, t14, anchor);
      insert_dev(target, div2, anchor);
      append_dev(div2, t15);
      insert_dev(target, t16, anchor);
      insert_dev(target, div3, anchor);
      append_dev(div3, p3);
      append_dev(p3, t17);
      append_dev(div3, t18);
      append_dev(div3, p4);
      append_dev(p4, t19);
      append_dev(div3, t20);
      append_dev(div3, p5);
      append_dev(p5, t21);
      insert_dev(target, t22, anchor);
      insert_dev(target, div4, anchor);
      append_dev(div4, t23);
      insert_dev(target, t24, anchor);
      insert_dev(target, div5, anchor);
      append_dev(div5, p6);
      append_dev(p6, t25);
      append_dev(div5, t26);
      append_dev(div5, p7);
      append_dev(p7, t27);
      append_dev(div5, t28);
      append_dev(div5, p8);
      append_dev(p8, t29);
      insert_dev(target, t30, anchor);
      insert_dev(target, div6, anchor);
      append_dev(div6, t31);
      insert_dev(target, t32, anchor);
      insert_dev(target, div7, anchor);
      append_dev(div7, p9);
      append_dev(p9, t33);
      append_dev(div7, t34);
      append_dev(div7, p10);
      append_dev(p10, t35);
      append_dev(div7, t36);
      append_dev(div7, p11);
      append_dev(p11, t37);
      insert_dev(target, t38, anchor);
      insert_dev(target, div8, anchor);
      append_dev(div8, t39);
      current = true;

      if (!mounted) {
        dispose = [action_destroyer(animate_action = animate.call(null, p0, {
          type: "from",
          duration: 1,
          opacity: 0,
          x: -100
        })), action_destroyer(animate_action_1 = animate.call(null, p1, {
          type: "from",
          duration: 1,
          opacity: 0,
          x: 100,
          onComplete:
          /*animate_function*/
          ctx[4]
        })), listen_dev(h1, "click",
        /*testClick*/
        ctx[3], false, false, false), action_destroyer(triggerMe_action = triggerMe.call(null, div1, {
          duration: 1,
          opacity: 0,
          x: 100
        })), action_destroyer(newTrigger_action = newTrigger.call(null, div2, {
          start: "top bottom",
          toggleActions: "play none none reverse"
        })), action_destroyer(pinScrub_action = pinScrub.call(null, div3, {
          autoAlpha: 0,
          y: "-=100",
          stagger: 0.3
        })), action_destroyer(pinScrub_action_1 = pinScrub.call(null, div5, {
          autoAlpha: 0,
          x: "+=100",
          stagger: 0.3
        })), action_destroyer(pinScrub_action_2 = pinScrub.call(null, div7, {
          autoAlpha: 0,
          x: "-=100",
          stagger: 0.3
        }))];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (animate_action_1 && is_function(animate_action_1.update) && dirty &
      /*desc*/
      1) animate_action_1.update.call(null, {
        type: "from",
        duration: 1,
        opacity: 0,
        x: 100,
        onComplete:
        /*animate_function*/
        ctx[4]
      });
      if (!current || dirty &
      /*msg*/
      2) set_data_dev(t5,
      /*msg*/
      ctx[1]);
      set_attributes(div0, div0_data = get_spread_update(div0_levels, [{
        class: "spacer"
      }, dirty &
      /*data*/
      4 &&
      /*data*/
      ctx[2]]));
      toggle_class(div0, "svelte-8w8xtt", true);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(icon0.$$.fragment, local);
      transition_in(icon1.$$.fragment, local);
      transition_in(icon2.$$.fragment, local);
      transition_in(icon3.$$.fragment, local);
      transition_in(icon4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(icon0.$$.fragment, local);
      transition_out(icon1.$$.fragment, local);
      transition_out(icon2.$$.fragment, local);
      transition_out(icon3.$$.fragment, local);
      transition_out(icon4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(p0);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(p1);
      destroy_component(icon0);
      if (detaching) detach_dev(t4);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t6);
      destroy_component(icon1, detaching);
      if (detaching) detach_dev(t7);
      destroy_component(icon2, detaching);
      if (detaching) detach_dev(t8);
      destroy_component(icon3, detaching);
      if (detaching) detach_dev(t9);
      destroy_component(icon4, detaching);
      if (detaching) detach_dev(t10);
      if (detaching) detach_dev(div0);
      if (detaching) detach_dev(t12);
      if (detaching) detach_dev(div1);
      if (detaching) detach_dev(t14);
      if (detaching) detach_dev(div2);
      if (detaching) detach_dev(t16);
      if (detaching) detach_dev(div3);
      if (detaching) detach_dev(t22);
      if (detaching) detach_dev(div4);
      if (detaching) detach_dev(t24);
      if (detaching) detach_dev(div5);
      if (detaching) detach_dev(t30);
      if (detaching) detach_dev(div6);
      if (detaching) detach_dev(t32);
      if (detaching) detach_dev(div7);
      if (detaching) detach_dev(t38);
      if (detaching) detach_dev(div8);
      mounted = false;
      run_all(dispose);
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
  var data = {
    "data-test": "this"
  };
  var desc = false;
  var msg = "click me";

  function testClick(e) {
    var test = e.target;
    console.log(test); // using GSAP test

    gsapWithCSS.to(test, {
      border: "0px",
      scale: 1.5,
      duration: 0.5,
      yoyo: true,
      repeat: 5
    });
    $$invalidate(1, msg = "GSAP 🐢 test success!");
  }

  onMount(function () {
    return function () {
      console.log("killing triggers");
      killTriggers();
    };
  });
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn("<Projects> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Projects", $$slots, []);

  var animate_function = function animate_function() {
    return $$invalidate(0, desc = true);
  };

  $$self.$capture_state = function () {
    return {
      onMount: onMount,
      onDestroy: onDestroy,
      beforeUpdate: beforeUpdate,
      afterUpdate: afterUpdate,
      Icon: Icon,
      faArrowsAlt: faArrowsAlt,
      faArrowDown: faArrowDown,
      faFeather: faFeather,
      faBacon: faBacon,
      faFish: faFish,
      gsap: gsapWithCSS,
      ScrollTrigger: ScrollTrigger,
      animate: animate,
      triggerMe: triggerMe,
      pinScrub: pinScrub,
      newTrigger: newTrigger,
      killTriggers: killTriggers,
      Trigger: Trigger,
      data: data,
      desc: desc,
      msg: msg,
      testClick: testClick
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("data" in $$props) $$invalidate(2, data = $$props.data);
    if ("desc" in $$props) $$invalidate(0, desc = $$props.desc);
    if ("msg" in $$props) $$invalidate(1, msg = $$props.msg);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [desc, msg, data, testClick, animate_function];
}

var Projects = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Projects, _SvelteComponentDev);

  var _super = _createSuper(Projects);

  function Projects(options) {
    var _this;

    _classCallCheck(this, Projects);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Projects",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Projects;
}(SvelteComponentDev);

export default Projects;
