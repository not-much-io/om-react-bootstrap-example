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

(def rbootButton (js/React.createFactory js/ReactBootstrap.Button))

(defui Root
  Object
  (render [this]
    (dom/div nil
             (apply dom/div nil
                    (map #(rbootButton #js {:bsStyle %} "Test")
                         ["default" "primary" "success" "info" "warning" "danger"])))))

(om/add-root! reconciler
              Root
              (gdom/getElement "app"))