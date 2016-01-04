(ns om-next-mini-app.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [om-next-mini-app.parser :as p]
            [cljsjs.react-bootstrap]))

(enable-console-print!)

(def app-state (atom {:app-title "Minimal Om Todo"
                      :todos     [{:title    "Keep an eye on bunny"
                                   :priority 1}
                                  {:title    "Get something to eat"
                                   :priority 3}
                                  {:title    "Read books"
                                   :priority 4}
                                  {:title    "Write code"
                                   :priority 2}]}))

(def reconciler
  (om/reconciler {:state  app-state
                  :parser p/parser}))

(def bsNavBar         (js/React.createFactory js/ReactBootstrap.Navbar))
(def bsPageHeader     (js/React.createFactory js/ReactBootstrap.PageHeader))
(def bsButtonToolbar  (js/React.createFactory js/ReactBootstrap.ButtonToolbar))
(def bsButton         (js/React.createFactory js/ReactBootstrap.Button))
(def bsPanel          (js/React.createFactory js/ReactBootstrap.Panel))
(def bsAccordion      (js/React.createFactory js/ReactBootstrap.Accordion))
(def bsProgressBar    (js/React.createFactory js/ReactBootstrap.ProgressBar))
(def bsInput          (js/React.createFactory js/ReactBootstrap.Input))

(defui Root
  Object
  (render [this]
    (dom/div nil
             (bsNavBar nil "")
             (bsPageHeader nil "Example page header")
             (bsInput #js {:type "text"
                           :label "Label"
                           :placeholder "Placeholder"})
             (bsAccordion nil
               (bsPanel #js {:header      "Header1"
                             :eventKey "1"} "Text1")
               (bsPanel #js {:header      "Header2"
                             :eventKey "2"} "Text2")
               (bsPanel #js {:header      "Header3"
                             :eventKey "3"} "Text3"))
             (bsProgressBar #js {:now 45})
             (bsButtonToolbar nil
                              (map #(bsButton #js {:bsStyle %
                                                   :onClick (fn [] (println %))
                                                   :key %} %)
                                   ["default" "primary" "success" "info" "warning" "danger"])))))

(om/add-root! reconciler
              Root
              (gdom/getElement "app"))