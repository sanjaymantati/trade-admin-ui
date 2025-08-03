(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6599:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navbars_NavbarVertical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4812);
/* harmony import */ var _navbars_NavbarTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9667);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SessionHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1812);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_navbars_NavbarVertical__WEBPACK_IMPORTED_MODULE_2__, _SessionHeader__WEBPACK_IMPORTED_MODULE_5__]);
([_navbars_NavbarVertical__WEBPACK_IMPORTED_MODULE_2__, _SessionHeader__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// import node module libraries


// import sub components




const DefaultDashboardLayout = (props)=>{
    const [showMenu, setShowMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "db-wrapper",
        className: `${showMenu ? "" : "toggled"}`,
        children: props.children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultDashboardLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1812:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_brockerService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8772);
/* harmony import */ var _service_homePageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7718);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_service_brockerService__WEBPACK_IMPORTED_MODULE_2__, _service_homePageService__WEBPACK_IMPORTED_MODULE_3__]);
([_service_brockerService__WEBPACK_IMPORTED_MODULE_2__, _service_homePageService__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// import node module libraries





// import sub components
const SessionHeader = (props)=>{
    return /*#__PURE__*/ _jsx(Fragment, {});
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(SessionHeader))));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9667:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-feather"
const external_react_feather_namespaceObject = require("react-feather");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-responsive"
var external_react_responsive_ = __webpack_require__(6666);
// EXTERNAL MODULE: external "simplebar-react"
var external_simplebar_react_ = __webpack_require__(4172);
// EXTERNAL MODULE: ./node_modules/simplebar/dist/simplebar.min.css
var simplebar_min = __webpack_require__(9233);
;// CONCATENATED MODULE: ./data/Notification.js
const Notification = [
    {
        id: 1,
        sender: "Rishi Chopra",
        message: `Mauris blandit erat id nunc blandit, ac eleifend dolor pretium.`
    },
    {
        id: 2,
        sender: "Neha Kannned",
        message: `Proin at elit vel est condimentum elementum id in ante. Maecenas et sapien metus.`
    },
    {
        id: 3,
        sender: "Nirmala Chauhan",
        message: `Morbi maximus urna lobortis elit sollicitudin sollicitudieget elit vel pretium.`
    },
    {
        id: 4,
        sender: "Sina Ray",
        message: `Sed aliquam augue sit amet mauris volutpat hendrerit sed nunc eu diam.`
    }
];
/* harmony default export */ const data_Notification = ((/* unused pure expression or super */ null && (Notification)));

;// CONCATENATED MODULE: ./hooks/useMounted.js
// This hook is used to fix React Hydration Error on any page
// import node module libraries

const useMounted_useMounted = ()=>{
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(()=>{
        setHasMounted(true);
    }, []);
    return hasMounted;
};
/* harmony default export */ const hooks_useMounted = ((/* unused pure expression or super */ null && (useMounted_useMounted)));

;// CONCATENATED MODULE: ./layouts/QuickMenu.js
// import node module libraries





// simple bar scrolling used for notification item scrolling


// import data files

// import hooks

const QuickMenu_QuickMenu = ()=>{
    const hasMounted = useMounted();
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });
    const QuickMenuDesktop = ()=>{
        return /*#__PURE__*/ _jsx(ListGroup, {
            as: "ul",
            bsPrefix: "navbar-nav",
            className: "navbar-right-wrap ms-auto d-flex nav-top-wrap",
            children: /*#__PURE__*/ _jsxs(Dropdown, {
                as: "li",
                className: "ms-2",
                children: [
                    /*#__PURE__*/ _jsx(Dropdown.Toggle, {
                        as: "a",
                        bsPrefix: " ",
                        className: "rounded-circle",
                        id: "dropdownUser",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "avatar avatar-md",
                            children: /*#__PURE__*/ _jsx(Image, {
                                alt: "avatar",
                                src: "/images/avatar/avatar-1.jpg",
                                className: "rounded-circle"
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx(Dropdown.Menu, {
                        className: "dropdown-menu dropdown-menu-end ",
                        align: "end",
                        "aria-labelledby": "dropdownUser",
                        show: true,
                        children: /*#__PURE__*/ _jsx(Dropdown.Item, {
                            as: "div",
                            className: "px-4 pb-0 pt-2",
                            bsPrefix: " ",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "lh-1 ",
                                children: /*#__PURE__*/ _jsx("h5", {
                                    className: "mb-1",
                                    children: " Gojo Satoru"
                                })
                            })
                        })
                    })
                ]
            })
        });
    };
    const QuickMenuMobile = ()=>{
        return /*#__PURE__*/ _jsx(ListGroup, {
            as: "ul",
            bsPrefix: "navbar-nav",
            className: "navbar-right-wrap ms-auto d-flex nav-top-wrap",
            children: /*#__PURE__*/ _jsxs(Dropdown, {
                as: "li",
                className: "ms-2",
                children: [
                    /*#__PURE__*/ _jsx(Dropdown.Toggle, {
                        as: "a",
                        bsPrefix: " ",
                        className: "rounded-circle",
                        id: "dropdownUser",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "avatar avatar-md",
                            children: /*#__PURE__*/ _jsx(Image, {
                                alt: "avatar",
                                src: "/images/avatar/avatar-1.jpg",
                                className: "rounded-circle"
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx(Dropdown.Menu, {
                        className: "dropdown-menu dropdown-menu-end ",
                        align: "end",
                        "aria-labelledby": "dropdownUser",
                        children: /*#__PURE__*/ _jsxs(Dropdown.Item, {
                            as: "div",
                            className: "px-4 pb-0 pt-2",
                            bsPrefix: " ",
                            children: [
                                /*#__PURE__*/ _jsxs("div", {
                                    className: "lh-1 ",
                                    children: [
                                        /*#__PURE__*/ _jsx("h5", {
                                            className: "mb-1",
                                            children: " Gojo Satoru"
                                        }),
                                        /*#__PURE__*/ _jsx(Link, {
                                            href: "#",
                                            className: "text-inherit fs-6",
                                            children: "View my profile"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: " dropdown-divider mt-3 mb-2"
                                })
                            ]
                        })
                    })
                ]
            })
        });
    };
    return /*#__PURE__*/ _jsx(Fragment, {
        children: hasMounted && isDesktop ? /*#__PURE__*/ _jsx(QuickMenuDesktop, {}) : /*#__PURE__*/ _jsx(QuickMenuMobile, {})
    });
};
/* harmony default export */ const layouts_QuickMenu = ((/* unused pure expression or super */ null && (QuickMenu_QuickMenu)));

;// CONCATENATED MODULE: ./layouts/navbars/NavbarTop.js
// import node module libraries




// import sub components

const NavbarTop = (props)=>{
    return /*#__PURE__*/ _jsx(Navbar, {
        expanded: "lg",
        className: "navbar-classic navbar navbar-expand-lg",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "d-flex justify-content-between w-100",
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "d-flex align-items-center",
                    children: /*#__PURE__*/ _jsx(Link, {
                        href: "#",
                        id: "nav-toggle",
                        className: "nav-icon me-2 icon-xs",
                        onClick: ()=>props.data.SidebarToggleMenu(!props.data.showMenu),
                        children: /*#__PURE__*/ _jsx(Menu, {
                            size: "18px"
                        })
                    })
                }),
                /*#__PURE__*/ _jsx(Nav, {
                    className: "navbar-right-wrap ms-2 d-flex nav-top-wrap",
                    children: /*#__PURE__*/ _jsx(QuickMenu, {})
                })
            ]
        })
    });
};
/* harmony default export */ const navbars_NavbarTop = ((/* unused pure expression or super */ null && (NavbarTop)));


/***/ }),

/***/ 4812:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4172);
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(simplebar_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9233);
/* harmony import */ var simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var routes_DashboardRoutes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2182);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([routes_DashboardRoutes__WEBPACK_IMPORTED_MODULE_8__]);
routes_DashboardRoutes__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// import node module libraries






// import simple bar scrolling used for notification item scrolling


// import routes file

const NavbarVertical = (props)=>{
    const location = useRouter();
    const CustomToggle = ({ children , eventKey , icon  })=>{
        const { activeEventKey  } = useContext(AccordionContext);
        const decoratedOnClick = useAccordionButton(eventKey, ()=>console.log("totally custom!"));
        const isCurrentEventKey = activeEventKey === eventKey;
        return /*#__PURE__*/ _jsx("li", {
            className: "nav-item",
            children: /*#__PURE__*/ _jsxs(Link, {
                href: "#",
                className: "nav-link ",
                onClick: decoratedOnClick,
                "data-bs-toggle": "collapse",
                "data-bs-target": "#navDashboard",
                "aria-expanded": isCurrentEventKey ? true : false,
                "aria-controls": "navDashboard",
                children: [
                    icon ? /*#__PURE__*/ _jsx("i", {
                        className: `nav-icon fe fe-${icon} me-2`
                    }) : "",
                    " ",
                    children
                ]
            })
        });
    };
    const CustomToggleLevel2 = ({ children , eventKey , icon  })=>{
        const { activeEventKey  } = useContext(AccordionContext);
        const decoratedOnClick = useAccordionButton(eventKey, ()=>console.log("totally custom!"));
        const isCurrentEventKey = activeEventKey === eventKey;
        return /*#__PURE__*/ _jsx(Link, {
            href: "#",
            className: "nav-link ",
            onClick: decoratedOnClick,
            "data-bs-toggle": "collapse",
            "data-bs-target": "#navDashboard",
            "aria-expanded": isCurrentEventKey ? true : false,
            "aria-controls": "navDashboard",
            children: children
        });
    };
    const generateLink = (item)=>{
        return /*#__PURE__*/ _jsxs(Link, {
            href: item.link,
            className: `nav-link ${location.pathname === item.link ? "active" : ""}`,
            onClick: (e)=>isMobile ? props.onClick(!props.showMenu) : props.showMenu,
            children: [
                item.name,
                "",
                item.badge ? /*#__PURE__*/ _jsx(Badge, {
                    className: "ms-1",
                    bg: item.badgecolor ? item.badgecolor : "primary",
                    children: item.badge
                }) : ""
            ]
        });
    };
    const isMobile = useMediaQuery({
        maxWidth: 767
    });
    return /*#__PURE__*/ _jsx(Fragment, {
        children: /*#__PURE__*/ _jsxs(SimpleBar, {
            style: {
                maxHeight: "100vh"
            },
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: "nav-scroller",
                    children: /*#__PURE__*/ _jsx(Link, {
                        href: "/",
                        className: "navbar-brand",
                        children: /*#__PURE__*/ _jsx(Image, {
                            src: "/images/brand/logo/logo.svg",
                            alt: ""
                        })
                    })
                }),
                /*#__PURE__*/ _jsx(Accordion, {
                    defaultActiveKey: "0",
                    as: "ul",
                    className: "navbar-nav flex-column",
                    children: DashboardMenu.map(function(menu, index) {
                        if (menu.grouptitle) {
                            return /*#__PURE__*/ _jsx(Card, {
                                bsPrefix: "nav-item",
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "navbar-heading",
                                    children: menu.title
                                })
                            }, index);
                        } else {
                            if (menu.children) {
                                return /*#__PURE__*/ _jsxs(Fragment, {
                                    children: [
                                        /*#__PURE__*/ _jsxs(CustomToggle, {
                                            eventKey: index,
                                            icon: menu.icon,
                                            children: [
                                                menu.title,
                                                menu.badge ? /*#__PURE__*/ _jsx(Badge, {
                                                    className: "ms-1",
                                                    bg: menu.badgecolor ? menu.badgecolor : "primary",
                                                    children: menu.badge
                                                }) : ""
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsx(Accordion.Collapse, {
                                            eventKey: index,
                                            as: "li",
                                            bsPrefix: "nav-item",
                                            children: /*#__PURE__*/ _jsx(ListGroup, {
                                                as: "ul",
                                                bsPrefix: "",
                                                className: "nav flex-column",
                                                children: menu.children.map(function(menuLevel1Item, menuLevel1Index) {
                                                    if (menuLevel1Item.children) {
                                                        return /*#__PURE__*/ _jsx(ListGroup.Item, {
                                                            as: "li",
                                                            bsPrefix: "nav-item",
                                                            children: /*#__PURE__*/ _jsxs(Accordion, {
                                                                defaultActiveKey: "0",
                                                                className: "navbar-nav flex-column",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxs(CustomToggleLevel2, {
                                                                        eventKey: 0,
                                                                        children: [
                                                                            menuLevel1Item.title,
                                                                            menuLevel1Item.badge ? /*#__PURE__*/ _jsx(Badge, {
                                                                                className: "ms-1",
                                                                                bg: menuLevel1Item.badgecolor ? menuLevel1Item.badgecolor : "primary",
                                                                                children: menuLevel1Item.badge
                                                                            }) : ""
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsx(Accordion.Collapse, {
                                                                        eventKey: 0,
                                                                        bsPrefix: "nav-item",
                                                                        children: /*#__PURE__*/ _jsx(ListGroup, {
                                                                            as: "ul",
                                                                            bsPrefix: "",
                                                                            className: "nav flex-column",
                                                                            children: menuLevel1Item.children.map(function(menuLevel2Item, menuLevel2Index) {
                                                                                if (menuLevel2Item.children) {
                                                                                    return /*#__PURE__*/ _jsx(ListGroup.Item, {
                                                                                        as: "li",
                                                                                        bsPrefix: "nav-item",
                                                                                        children: /*#__PURE__*/ _jsxs(Accordion, {
                                                                                            defaultActiveKey: "0",
                                                                                            className: "navbar-nav flex-column",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsxs(CustomToggleLevel2, {
                                                                                                    eventKey: 0,
                                                                                                    children: [
                                                                                                        menuLevel2Item.title,
                                                                                                        menuLevel2Item.badge ? /*#__PURE__*/ _jsx(Badge, {
                                                                                                            className: "ms-1",
                                                                                                            bg: menuLevel2Item.badgecolor ? menuLevel2Item.badgecolor : "primary",
                                                                                                            children: menuLevel2Item.badge
                                                                                                        }) : ""
                                                                                                    ]
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx(Accordion.Collapse, {
                                                                                                    eventKey: 0,
                                                                                                    bsPrefix: "nav-item",
                                                                                                    children: /*#__PURE__*/ _jsx(ListGroup, {
                                                                                                        as: "ul",
                                                                                                        bsPrefix: "",
                                                                                                        className: "nav flex-column",
                                                                                                        children: menuLevel2Item.children.map(function(menuLevel3Item, menuLevel3Index) {
                                                                                                            return /*#__PURE__*/ _jsx(ListGroup.Item, {
                                                                                                                as: "li",
                                                                                                                bsPrefix: "nav-item",
                                                                                                                children: generateLink(menuLevel3Item)
                                                                                                            }, menuLevel3Index);
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    }, menuLevel2Index);
                                                                                } else {
                                                                                    return /*#__PURE__*/ _jsx(ListGroup.Item, {
                                                                                        as: "li",
                                                                                        bsPrefix: "nav-item",
                                                                                        children: generateLink(menuLevel2Item)
                                                                                    }, menuLevel2Index);
                                                                                }
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }, menuLevel1Index);
                                                    } else {
                                                        return /*#__PURE__*/ _jsx(ListGroup.Item, {
                                                            as: "li",
                                                            bsPrefix: "nav-item",
                                                            children: generateLink(menuLevel1Item)
                                                        }, menuLevel1Index);
                                                    }
                                                })
                                            })
                                        })
                                    ]
                                }, index);
                            } else {
                                return /*#__PURE__*/ _jsx(Card, {
                                    bsPrefix: "nav-item",
                                    children: /*#__PURE__*/ _jsxs(Link, {
                                        href: menu.link,
                                        className: `nav-link ${location.pathname === menu.link ? "active" : ""}`,
                                        children: [
                                            typeof menu.icon === "string" ? /*#__PURE__*/ _jsx("i", {
                                                className: `nav-icon fe fe-${menu.icon} me-2`
                                            }) : menu.icon,
                                            menu.title,
                                            menu.badge ? /*#__PURE__*/ _jsx(Badge, {
                                                className: "ms-1",
                                                bg: menu.badgecolor ? menu.badgecolor : "primary",
                                                children: menu.badge
                                            }) : ""
                                        ]
                                    })
                                }, index);
                            }
                        }
                    })
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (NavbarVertical)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_SSRProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4932);
/* harmony import */ var react_bootstrap_SSRProvider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_SSRProvider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9752);
/* harmony import */ var styles_theme_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5593);
/* harmony import */ var styles_theme_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_theme_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var layouts_DefaultDashboardLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6599);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_5__, layouts_DefaultDashboardLayout__WEBPACK_IMPORTED_MODULE_7__]);
([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_5__, layouts_DefaultDashboardLayout__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// import node module libraries






// import theme style scss file

// import default layouts

function MyApp({ Component , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const pageURL = process.env.baseURL + router.pathname;
    const title = "Dash UI - Next.Js Admin Dashboard Template";
    const description = "Dash is a fully responsive and yet modern premium Nextjs template & snippets. Geek is feature-rich Nextjs components and beautifully designed pages that help you create the best possible website and web application projects. Nextjs Snippet ";
    const keywords = "Dash UI, Nextjs, Next.js, Course, Sass, landing, Marketing, admin themes, Nextjs admin, Nextjs dashboard, ui kit, web app, multipurpose";
    // Identify the layout, which will be applied conditionally
    const Layout = Component.Layout || (router.pathname.includes("dashboard") ? router.pathname.includes("instructor") || router.pathname.includes("student") ? layouts_DefaultDashboardLayout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z : layouts_DefaultDashboardLayout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z : layouts_DefaultDashboardLayout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_SSRProvider__WEBPACK_IMPORTED_MODULE_4___default()), {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: keywords
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "shortcut icon",
                        href: "/favicon.ico",
                        type: "image/x-icon"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_3__.NextSeo, {
                title: title,
                description: description,
                canonical: pageURL,
                openGraph: {
                    url: pageURL,
                    title: title,
                    description: description,
                    site_name: process.env.siteName
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Layout, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_5__.Analytics, {})
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2182:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export DashboardMenu */
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_0__]);
uuid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/**
 *  All Dashboard Routes
 *
 *  Understanding name/value pairs for Dashboard routes
 *
 *  Applicable for main/root/level 1 routes
 *  icon 		: String - It's only for main menu or you can consider 1st level menu item to specify icon name.
 *
 *  Applicable for main/root/level 1 and subitems routes
 * 	id 			: Number - You can use uuid() as value to generate unique ID using uuid library, you can also assign constant unique ID for react dynamic objects.
 *  title 		: String - If menu contains childern use title to provide main menu name.
 *  badge 		: String - (Optional - Default - '') If you specify badge value it will be displayed beside the menu title or menu item.
 * 	badgecolor 	: String - (Optional - Default - 'primary' ) - Used to specify badge background color.
 *
 *  Applicable for subitems / children items routes
 *  name 		: String - If it's menu item in which you are specifiying link, use name ( don't use title for that )
 *  children	: Array - Use to specify submenu items
 *
 *  Used to segrigate menu groups
 *  grouptitle : Boolean - (Optional - Default - false ) If you want to group menu items you can use grouptitle = true,
 *  ( Use title : value to specify group title  e.g. COMPONENTS , DOCUMENTATION that we did here. )
 *
 */ const DashboardMenu = [
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
        title: "Buckets",
        icon: "home",
        link: "/"
    },
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
        title: "Instruments",
        icon: "monitor",
        link: "/instruments/"
    },
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
        title: "Aligned",
        icon: "lock",
        link: "/aligned"
    },
    {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
        title: "Research",
        icon: "monitor",
        link: "/research"
    }
];
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (DashboardMenu)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8772:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports createSessionURL, validateSessionURL, createSession */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const server_url = "http://localhost:8080";

async function createSessionURL() {
    const url = server_url + "/broker/session/generate-url";
    return await axios.get(url).then((response)=>{
        if (response.status === 200) {
            return {
                data: response.data,
                error: undefined
            };
        } else {
            return {
                data: undefined,
                error: response.data
            };
        }
    }).catch(function(error) {
        return {
            data: undefined,
            error: error
        };
    });
}
async function validateSessionURL() {
    const url = server_url + "/broker/session/validate";
    return await axios.get(url).then((response)=>{
        if (response.status === 200) {
            return {
                data: response.data,
                error: undefined
            };
        } else {
            return {
                data: undefined,
                error: response.data
            };
        }
    }).catch(function(error) {
        return {
            data: undefined,
            error: error
        };
    });
}
async function createSession(request) {
    const url = server_url + "/broker/session/initiate";
    return await axios.post(url, request).then((response)=>{
        if (response.status === 201) {
            return {
                data: {},
                error: undefined
            };
        } else if (response.status === 400) {
            return {
                data: undefined,
                error: response.data.message
            };
        }
    }).catch(function(error) {
        return {
            data: undefined,
            error: error?.response?.data?.message
        };
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7718:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports getOrders, getTradeRevisions, createNewTrade, createNewTradeAlign, squareOffTrade, changeBucketState */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const server_url = "http://localhost:8080";

async function getOrders() {
    const url = server_url + "/trade";
    return await axios.get(url).then((response)=>{
        if (response.status === 200) {
            return {
                data: response.data,
                error: undefined
            };
        } else {
            return {
                data: undefined,
                error: response.data
            };
        }
    }).catch(function(error) {
        return {
            data: undefined,
            error: error
        };
    });
}
async function getTradeRevisions(revisionId) {
    const url = server_url + `/trade/${revisionId}/revisions`;
    return await axios.get(url).then((response)=>{
        if (response.status === 200) {
            return {
                data: response.data,
                error: undefined
            };
        } else {
            return {
                data: undefined,
                error: response.data
            };
        }
    }).catch(function(error) {
        return {
            data: undefined,
            error: error
        };
    });
}
async function createNewTrade(request) {
    const url = server_url + "/trade";
    const headers = {
        "x-mfa-otp": request.mfa
    };
    const config = {
        headers: headers
    };
    return await axios.post(url, request, config).then((response)=>{
        if (response.status === 201) {
            return {
                data: {},
                error: undefined
            };
        } else if (response.status === 400) {
            return {
                data: undefined,
                error: response.data.message
            };
        }
    }).catch(function(error) {
        return {
            data: undefined,
            error: error?.response?.data?.message
        };
    });
}
async function createNewTradeAlign(request) {
    const url = server_url + "/trade/align";
    return await axios.post(url, request).then((response)=>{
        if (response.status === 201) {
            return {
                data: {},
                error: undefined
            };
        } else if (response.status === 400) {
            return {
                data: undefined,
                error: response.data.message
            };
        }
    }).catch(function(error) {
        let errors = error?.response?.data?.message;
        if (error?.response?.data?.errors) {
            errors = error?.response?.data?.errors;
        }
        return {
            data: undefined,
            error: errors
        };
    });
}
async function squareOffTrade(id, mfa) {
    const headers = {
        "x-mfa-otp": mfa
    };
    const config = {
        headers: headers
    };
    const url = server_url + `/trade/${id}`;
    return await axios.delete(url, config).then((response)=>{
        if (response.status === 200) {
            return {
                data: {},
                error: undefined
            };
        } else if (response.status === 400) {
            return {
                data: undefined,
                error: response.data.message
            };
        }
    }).catch(function(error) {
        return {
            data: undefined,
            error: error?.response?.data?.message
        };
    });
}
async function changeBucketState(id, state, otp) {
    const url = server_url + `/bucket/${id}/${state}`;
    const headers = {
        "x-mfa-otp": otp
    };
    const config = {
        headers: headers
    };
    return await axios.put(url, null, config).then((response)=>{
        if (response.status === 200) {
            return {
                data: {},
                error: undefined
            };
        } else if (response.status === 400) {
            return {
                data: undefined,
                error: response.data.message
            };
        }
    }).catch(function(error) {
        return {
            data: undefined,
            error: error?.response?.data?.message
        };
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9233:
/***/ (() => {



/***/ }),

/***/ 5593:
/***/ (() => {



/***/ }),

/***/ 6641:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 4932:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/SSRProvider");

/***/ }),

/***/ 6666:
/***/ ((module) => {

"use strict";
module.exports = require("react-responsive");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4172:
/***/ ((module) => {

"use strict";
module.exports = require("simplebar-react");

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/analytics/react");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

"use strict";
module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(6004)));
module.exports = __webpack_exports__;

})();