import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, v as validate_slots, O as assign, Y as exclude_internal_props, Z as svg_element, h as claim_element, j as children, l as detach_dev, m as attr_dev, n as add_location, $ as null_to_empty, o as insert_dev, p as append_dev, r as _slicedToArray, w as noop } from './client.9dceeb83.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "node_modules\\fa-svelte\\src\\Icon.svelte";

function create_fragment(ctx) {
  var svg;
  var path_1;
  var svg_class_value;
  var block = {
    c: function create() {
      svg = svg_element("svg");
      path_1 = svg_element("path");
      this.h();
    },
    l: function claim(nodes) {
      svg = claim_element(nodes, "svg", {
        "aria-hidden": true,
        class: true,
        role: true,
        xmlns: true,
        viewBox: true
      }, 1);
      var svg_nodes = children(svg);
      path_1 = claim_element(svg_nodes, "path", {
        fill: true,
        d: true
      }, 1);
      children(path_1).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(path_1, "fill", "currentColor");
      attr_dev(path_1, "d",
      /*path*/
      ctx[0]);
      add_location(path_1, file, 7, 2, 129);
      attr_dev(svg, "aria-hidden", "true");
      attr_dev(svg, "class", svg_class_value = "" + (null_to_empty(
      /*classes*/
      ctx[1]) + " svelte-hi8kiy"));
      attr_dev(svg, "role", "img");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "viewBox",
      /*viewBox*/
      ctx[2]);
      add_location(svg, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, svg, anchor);
      append_dev(svg, path_1);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*path*/
      1) {
        attr_dev(path_1, "d",
        /*path*/
        ctx[0]);
      }

      if (dirty &
      /*classes*/
      2 && svg_class_value !== (svg_class_value = "" + (null_to_empty(
      /*classes*/
      ctx[1]) + " svelte-hi8kiy"))) {
        attr_dev(svg, "class", svg_class_value);
      }

      if (dirty &
      /*viewBox*/
      4) {
        attr_dev(svg, "viewBox",
        /*viewBox*/
        ctx[2]);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(svg);
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
  var _$$props = $$props,
      icon = _$$props.icon;
  var path = [];
  var classes = "";
  var viewBox = "";
  var _$$props2 = $$props,
      _$$props2$$$slots = _$$props2.$$slots,
      $$slots = _$$props2$$$slots === void 0 ? {} : _$$props2$$$slots,
      $$scope = _$$props2.$$scope;
  validate_slots("Icon", $$slots, []);

  $$self.$set = function ($$new_props) {
    $$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("icon" in $$new_props) $$invalidate(3, icon = $$new_props.icon);
  };

  $$self.$capture_state = function () {
    return {
      icon: icon,
      path: path,
      classes: classes,
      viewBox: viewBox
    };
  };

  $$self.$inject_state = function ($$new_props) {
    $$invalidate(4, $$props = assign(assign({}, $$props), $$new_props));
    if ("icon" in $$props) $$invalidate(3, icon = $$new_props.icon);
    if ("path" in $$props) $$invalidate(0, path = $$new_props.path);
    if ("classes" in $$props) $$invalidate(1, classes = $$new_props.classes);
    if ("viewBox" in $$props) $$invalidate(2, viewBox = $$new_props.viewBox);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*icon*/
    8) {
       $$invalidate(2, viewBox = "0 0 " + icon.icon[0] + " " + icon.icon[1]);
    }

     $$invalidate(1, classes = "fa-svelte " + ($$props.class ? $$props.class : ""));

    if ($$self.$$.dirty &
    /*icon*/
    8) {
       $$invalidate(0, path = icon.icon[4]);
    }
  };

  $$props = exclude_internal_props($$props);
  return [path, classes, viewBox, icon];
}

var Icon = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Icon, _SvelteComponentDev);

  var _super = _createSuper(Icon);

  function Icon(options) {
    var _this;

    _classCallCheck(this, Icon);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      icon: 3
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Icon",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*icon*/
    ctx[3] === undefined && !("icon" in props)) {
      console.warn("<Icon> was created without expected prop 'icon'");
    }

    return _this;
  }

  _createClass(Icon, [{
    key: "icon",
    get: function get() {
      throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Icon;
}(SvelteComponentDev);

var faArrowDown={prefix:'fas',iconName:'arrow-down',icon:[448,512,[],"f063","M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"]};var faArrowsAlt={prefix:'fas',iconName:'arrows-alt',icon:[512,512,[],"f0b2","M352.201 425.775l-79.196 79.196c-9.373 9.373-24.568 9.373-33.941 0l-79.196-79.196c-15.119-15.119-4.411-40.971 16.971-40.97h51.162L228 284H127.196v51.162c0 21.382-25.851 32.09-40.971 16.971L7.029 272.937c-9.373-9.373-9.373-24.569 0-33.941L86.225 159.8c15.119-15.119 40.971-4.411 40.971 16.971V228H228V127.196h-51.23c-21.382 0-32.09-25.851-16.971-40.971l79.196-79.196c9.373-9.373 24.568-9.373 33.941 0l79.196 79.196c15.119 15.119 4.411 40.971-16.971 40.971h-51.162V228h100.804v-51.162c0-21.382 25.851-32.09 40.97-16.971l79.196 79.196c9.373 9.373 9.373 24.569 0 33.941L425.773 352.2c-15.119 15.119-40.971 4.411-40.97-16.971V284H284v100.804h51.23c21.382 0 32.09 25.851 16.971 40.971z"]};var faBacon={prefix:'fas',iconName:'bacon',icon:[576,512,[],"f7e5","M218.92 336.39c34.89-34.89 44.2-59.7 54.05-86 10.61-28.29 21.59-57.54 61.37-97.34s69.05-50.77 97.35-61.38c23.88-9 46.64-17.68 76.79-45.37L470.81 8.91a31 31 0 0 0-40.18-2.83c-13.64 10.1-25.15 14.39-41 20.3C247 79.52 209.26 191.29 200.65 214.1c-29.75 78.83-89.55 94.68-98.72 98.09-24.86 9.26-54.73 20.38-91.07 50.36C-3 374-3.63 395 9.07 407.61l35.76 35.51C80 410.52 107 400.15 133 390.39c26.27-9.84 51.06-19.12 85.92-54zm348-232l-35.75-35.51c-35.19 32.63-62.18 43-88.25 52.79-26.26 9.85-51.06 19.16-85.95 54s-44.19 59.69-54 86C292.33 290 281.34 319.22 241.55 359s-69 50.73-97.3 61.32c-23.86 9-46.61 17.66-76.72 45.33l37.68 37.43a31 31 0 0 0 40.18 2.82c13.6-10.06 25.09-14.34 40.94-20.24 142.2-53 180-164.1 188.94-187.69C405 219.18 464.8 203.3 474 199.86c24.87-9.27 54.74-20.4 91.11-50.41 13.89-11.4 14.52-32.45 1.82-45.05z"]};var faFeather={prefix:'fas',iconName:'feather',icon:[512,512,[],"f52d","M467.14 44.84c-62.55-62.48-161.67-64.78-252.28 25.73-78.61 78.52-60.98 60.92-85.75 85.66-60.46 60.39-70.39 150.83-63.64 211.17l178.44-178.25c6.26-6.25 16.4-6.25 22.65 0s6.25 16.38 0 22.63L7.04 471.03c-9.38 9.37-9.38 24.57 0 33.94 9.38 9.37 24.6 9.37 33.98 0l66.1-66.03C159.42 454.65 279 457.11 353.95 384h-98.19l147.57-49.14c49.99-49.93 36.38-36.18 46.31-46.86h-97.78l131.54-43.8c45.44-74.46 34.31-148.84-16.26-199.36z"]};var faFish={prefix:'fas',iconName:'fish',icon:[576,512,[],"f578","M327.1 96c-89.97 0-168.54 54.77-212.27 101.63L27.5 131.58c-12.13-9.18-30.24.6-27.14 14.66L24.54 256 .35 365.77c-3.1 14.06 15.01 23.83 27.14 14.66l87.33-66.05C158.55 361.23 237.13 416 327.1 416 464.56 416 576 288 576 256S464.56 96 327.1 96zm87.43 184c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24 13.26 0 24 10.74 24 24 0 13.25-10.75 24-24 24z"]};

export { Icon as I, faArrowsAlt as a, faFeather as b, faFish as c, faBacon as d, faArrowDown as f };
