import closeModal from "./methods/closeModal";
import popModal from "./methods/popModal";
import pushModal from "./methods/pushModal";
import openModal from "./methods/openModal";
import {modalQueue} from "./utils/state";
import {config} from "./utils/config";
import onBeforeModalClose from "./hooks/onBeforeModalClose";
import getCurrentModal from "./methods/getCurrentModal";
import closeById from "./methods/closeById";
import promptModal from "./methods/prompt-modal";
import Modal from "./utils/Modal";
import getComponentFromStore from "./methods/get-component-from-store";
// @ts-ignore
import WidgetModalContainer from "./components/WidgetModalContainer.vue";
import useModalRouter from "./routerIntegration"
export {
    Modal,
    closeModal,
    popModal,
    pushModal,
    openModal,
    promptModal,
    modalQueue,
    config,
    WidgetModalContainer as container,
    onBeforeModalClose,
    useModalRouter,
    getCurrentModal,
    closeById,
    getComponentFromStore
}
