(defproject om-next-mini-app "0.1.0-SNAPSHOT"
  :description "Experiementing with om next"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.omcljs/om "1.0.0-alpha28"]
                 [figwheel-sidecar "0.5.0-SNAPSHOT" :scope "test"]
                 [cljsjs/react-bootstrap "0.27.3-0" :exclusions [org.webjars.bower/jquery]]])