(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{315:function(e,t,a){"use strict";a.r(t);var s=a(1),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cropper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cropper","aria-hidden":"true"}},[e._v("#")]),e._v(" Cropper")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#events"}},[e._v("Events")]),a("ul",[a("li",[a("a",{attrs:{href:"#change"}},[e._v("change")])])])]),a("li",[a("a",{attrs:{href:"#props"}},[e._v("Props")]),a("ul",[a("li",[a("a",{attrs:{href:"#src"}},[e._v("src")])]),a("li",[a("a",{attrs:{href:"#stencilcomponent"}},[e._v("stencilComponent")])]),a("li",[a("a",{attrs:{href:"#stencilprops"}},[e._v("stencilProps")])]),a("li",[a("a",{attrs:{href:"#classname"}},[e._v("classname")])]),a("li",[a("a",{attrs:{href:"#imageclassname"}},[e._v("imageClassname")])]),a("li",[a("a",{attrs:{href:"#areaclassname"}},[e._v("areaClassname")])]),a("li",[a("a",{attrs:{href:"#backgroundclassname"}},[e._v("backgroundClassname")])]),a("li",[a("a",{attrs:{href:"#debounce"}},[e._v("debounce")])]),a("li",[a("a",{attrs:{href:"#canvas"}},[e._v("canvas")])]),a("li",[a("a",{attrs:{href:"#checkcrossorigin"}},[e._v("checkCrossOrigin")])]),a("li",[a("a",{attrs:{href:"#minwidth"}},[e._v("minWidth")])]),a("li",[a("a",{attrs:{href:"#minheight"}},[e._v("minHeight")])]),a("li",[a("a",{attrs:{href:"#maxwidth"}},[e._v("maxWidth")])]),a("li",[a("a",{attrs:{href:"#maxheight"}},[e._v("maxHeight")])]),a("li",[a("a",{attrs:{href:"#defaultsize"}},[e._v("defaultSize")])]),a("li",[a("a",{attrs:{href:"#defaultposition"}},[e._v("defaultPosition")])]),a("li",[a("a",{attrs:{href:"#areasize"}},[e._v("areaSize")])]),a("li",[a("a",{attrs:{href:"#resizealgorithm"}},[e._v("resizeAlgorithm")])]),a("li",[a("a",{attrs:{href:"#movealgorithm"}},[e._v("moveAlgorithm")])])])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[e._v("#")]),e._v(" Events")]),e._v(" "),a("h3",{attrs:{id:"change"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("change")])]),e._v(" "),a("p",[e._v("Cropper will emit "),a("code",[e._v("change")]),e._v(" event on mounting, resizing the stencil, moving the stencil and changing the image.")]),e._v(" "),a("h2",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[e._v("#")]),e._v(" Props")]),e._v(" "),a("h3",{attrs:{id:"src"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("src")])]),e._v(" "),a("p",[e._v("Default: "),a("code",[e._v("null")])]),e._v(" "),a("p",[e._v("The link to cropping image or the image itself in base64 format")]),e._v(" "),a("h3",{attrs:{id:"stencilcomponent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stencilcomponent","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("stencilComponent")])]),e._v(" "),a("p",[e._v("Default: "),a("code",[e._v("RectangleStencil")])]),e._v(" "),a("p",[e._v("The stencil component. For globally registered component just pass their name here, otherwise pass the component’s options object.")]),e._v(" "),a("h3",{attrs:{id:"stencilprops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stencilprops","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("stencilProps")])]),e._v(" "),a("p",[e._v("Default: "),a("code",[e._v("{}")])]),e._v(" "),a("p",[e._v("The props that will be passed to the stencil component")]),e._v(" "),a("h3",{attrs:{id:"classname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#classname","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("classname")])]),e._v(" "),a("p",[e._v("Default: "),a("code",[e._v("''")])]),e._v(" "),a("p",[e._v("The optional classname for the root cropper block")]),e._v(" "),a("h3",{attrs:{id:"imageclassname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#imageclassname","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("imageClassname")])]),e._v(" "),a("p",[e._v("Default: "),a("code",[e._v("''")])]),e._v(" "),a("p",[e._v("The optional classname for the cropping image")]),e._v(" "),a("h3",{attrs:{id:"areaclassname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#areaclassname","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("areaClassname")])]),e._v(" "),a("p",[e._v("Default: "),a("code",[e._v("''")])]),e._v(" "),a("p",[e._v("The optional classname for the area. Probably you should not use this prop.")]),e._v(" "),a("h3",{attrs:{id:"backgroundclassname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backgroundclassname","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("backgroundClassname")])]),e._v(" "),a("p",[e._v("Default: "),a("code",[e._v("''")])]),e._v(" "),a("p",[e._v("The optional classname for the background under the cropping image")]),e._v(" "),a("h3",{attrs:{id:"debounce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debounce","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("debounce")])]),e._v(" "),a("p",[e._v("Default: "),a("code",[e._v("500")])]),e._v(" "),a("p",[e._v("The time before "),a("code",[e._v("change")]),e._v(" event will be emitted after moving or resizing stencil.")]),e._v(" "),a("h3",{attrs:{id:"canvas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canvas","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("canvas")])]),e._v(" "),a("p",[e._v("Default: "),a("code",[e._v("true")])]),e._v(" "),a("p",[e._v("This flag indicates if canvas should be used in cropper. If you need only the coordinates you should set "),a("code",[e._v("canvas = false")]),e._v(" to get little optimization.")]),e._v(" "),a("h3",{attrs:{id:"checkcrossorigin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checkcrossorigin","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("checkCrossOrigin")])]),e._v(" "),a("p",[e._v("Default: "),a("code",[e._v("true")])]),e._v(" "),a("p",[e._v("This flag controls the cross origin checking. If "),a("code",[e._v("checkCrossOrigin == true")]),e._v(" and "),a("code",[e._v("canvas == true")]),e._v(" then cropper will automatically add "),a("code",[e._v("crossOrigin")]),e._v(" tag to img element to prevent becoming canvas tainted.")]),e._v(" "),a("h3",{attrs:{id:"minwidth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minwidth","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("minWidth")])]),e._v(" "),a("p",[e._v("Default: "),a("code",[e._v("10")])]),e._v(" "),a("p",[e._v("The minimum width of the stencil in percents")]),e._v(" "),a("h3",{attrs:{id:"minheight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minheight","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("minHeight")])]),e._v(" "),a("p",[e._v("Default: "),a("code",[e._v("10")])]),e._v(" "),a("p",[e._v("The minimum height of the stencil in percents")]),e._v(" "),a("h3",{attrs:{id:"maxwidth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maxwidth","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("maxWidth")])]),e._v(" "),a("p",[e._v("Default: "),a("code",[e._v("100")])]),e._v(" "),a("p",[e._v("The maximum width of the stencil in percents")]),e._v(" "),a("h3",{attrs:{id:"maxheight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maxheight","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("maxHeight")])]),e._v(" "),a("p",[e._v("Default: "),a("code",[e._v("100")])]),e._v(" "),a("p",[e._v("The maximum height of the stencil in percents")]),e._v(" "),a("h3",{attrs:{id:"defaultsize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaultsize","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("defaultSize")])]),e._v(" "),a("p",[e._v("Default: "),a("code",[e._v("core.defaultSize")])]),e._v(" "),a("p",[e._v("The static function that accepts "),a("code",[e._v("cropper")]),e._v(" (DOM Element), "),a("code",[e._v("image")]),e._v(" (DOM Element) and "),a("code",[e._v("props")]),e._v(" (all cropper's props) and return object with "),a("code",[e._v("height")]),e._v(" and "),a("code",[e._v("width")]),e._v(" fields, i.e. default size of the stencil (relative to original image size)")]),e._v(" "),a("h3",{attrs:{id:"defaultposition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaultposition","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("defaultPosition")])]),e._v(" "),a("p",[e._v("Default: "),a("code",[e._v("core.defaultPosition")])]),e._v(" "),a("p",[e._v("The static function that accepts "),a("code",[e._v("cropper")]),e._v(" (DOM Element), "),a("code",[e._v("image")]),e._v(" (DOM Element), "),a("code",[e._v("width")]),e._v(",  "),a("code",[e._v("height")]),e._v(" (size of cropper), and "),a("code",[e._v("props")]),e._v(" (all cropper's props) and return object with "),a("code",[e._v("left")]),e._v(" and "),a("code",[e._v("top")]),e._v(" fields, i.e. default position of the stencil (relative to original image size)")]),e._v(" "),a("h3",{attrs:{id:"areasize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#areasize","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("areaSize")])]),e._v(" "),a("p",[e._v("Default: "),a("code",[e._v("core.areaSize")])]),e._v(" "),a("p",[e._v("The static function that accepts "),a("code",[e._v("cropper")]),e._v(" (DOM Element) and "),a("code",[e._v("image")]),e._v(" (DOM Element) and return the object with "),a("code",[e._v("height")]),e._v(" and "),a("code",[e._v("width")]),e._v(" fields, i.e. width and height of the area.")]),e._v(" "),a("h3",{attrs:{id:"resizealgorithm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resizealgorithm","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("resizeAlgorithm")])]),e._v(" "),a("p",[e._v("Default: "),a("code",[e._v("core.resize")])]),e._v(" "),a("p",[e._v("The static function that accepts "),a("code",[e._v("coorditanes")]),e._v(", "),a("code",[e._v("restrictions")]),e._v(", "),a("code",[e._v("imageSize")]),e._v(", "),a("code",[e._v("coefficient")]),e._v(", "),a("code",[e._v("aspectRatio")]),e._v(", "),a("code",[e._v("resizeEvent")]),e._v(" and returns the object.")]),e._v(" "),a("p",[e._v("For example something like that")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\twidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\theight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\tleft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\ttop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h3",{attrs:{id:"movealgorithm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#movealgorithm","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("moveAlgorithm")])]),e._v(" "),a("p",[e._v("Default: "),a("code",[e._v("core.move")])]),e._v(" "),a("p",[e._v("The static function that accepts "),a("code",[e._v("coorditanes")]),e._v(", "),a("code",[e._v("restrictions")]),e._v(", "),a("code",[e._v("imageSize")]),e._v(", "),a("code",[e._v("coefficient")]),e._v(", "),a("code",[e._v("moveEvent")]),e._v(" and returns the object.")]),e._v(" "),a("p",[e._v("For example something like that")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\twidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\theight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\tleft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\ttop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])},[],!1,null,null,null);t.default=r.exports}}]);