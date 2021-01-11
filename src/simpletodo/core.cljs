(ns simpletodo.core
    (:require
      [reagent.core :as r]
      [reagent.dom :as d]))
;; ------------------------
;; Data

(def todos (r/atom [{:desc "Fry the garlic" :completed true}
                    {:desc "Boil the pasta" :completed false}]))

;; -------------------------
;; Views

(defn todo-item [{:keys [desc completed index]}]
  [:li {:style {:color (if completed "green" "red")}}
   [:input {:type "checkbox"
            :style {:margin-right 8}
            :value completed
            :checked completed
            :on-change #(swap! todos update-in [index] merge {:completed (not completed)})}]
   [:span desc]])

(defn todo-form []
  (let [new-item (r/atom "")]
    (fn []
      [:form {:style {:margin "12px 0"}
                  :on-submit (fn [e]
                               (.preventDefault e)
                               (swap! todos conj {:completed false
                                                  :desc @new-item})
                               (reset! new-item ""))}
           [:input {:placeholder "Add a new item"
                    :value @new-item
                    :on-change #(reset! new-item (.. % -target -value))}]])))

(defn home-page []
  [:div
   [:h2 "Lists keep it simple"]
   [:p "Add a new item below:"]
   [todo-form]
   [:ul
    (map-indexed
     (fn [index todo]
       ^{:key index} [todo-item (assoc todo :index index)])
     @todos)
    ]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
