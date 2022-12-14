import Controller from "@ember/controller";
import ModalFunctionality from "discourse/mixins/modal-functionality";
import { bufferedProperty } from "discourse/mixins/buffered-content";

export default Controller.extend(
  ModalFunctionality,
  bufferedProperty("badge"),
  {
    badge: null,

    onShow() {
      this.setProperties({
        badge: null,
      });
    },

    get modalTitle() {
      if (!this.badge) return "";
      return `${this.badge.society.metadata.name}`;
    },

    get attestationType() {
      if (!this.badge) return "";
      return this.badge.attestation.metadata?.attestationType || "";
    },

    onClose() {
      this.set("badge", null);
    },
  }
);
