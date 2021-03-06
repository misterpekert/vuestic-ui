import VaAccordion from './vuestic-components/va-collapse/VaAccordion'
import VaAffix from './vuestic-components/va-affix/VaAffix'
import VaAvatar from './vuestic-components/va-avatar/VaAvatar'
import VaBadge from './vuestic-components/va-badge/VaBadge.vue'
import VaButton from './vuestic-components/va-button/VaButton.vue'
import VaButtonGroup
  from './vuestic-components/va-button-group/VaButtonGroup.vue'
import VaButtonToggle
  from './vuestic-components/va-button-toggle/VaButtonToggle.vue'
import VaBreadcrumbs from './vuestic-components/va-breadcrumbs/VaBreadcrumbs.vue'
import VaBreadcrumbsItem from './vuestic-components/va-breadcrumbs/VaBreadcrumbsItem.vue'
import VaCard from './vuestic-components/va-card/VaCard'
import VaCardContent from './vuestic-components/va-card/VaCardContent'
import VaCardTitle from './vuestic-components/va-card/VaCardTitle'
import VaCheckbox from './vuestic-components/va-checkbox/VaCheckbox.vue'
import VaCollapse from './vuestic-components/va-collapse/VaCollapse'
import VaContent from './vuestic-components/va-content/VaContent'
import VaDataTable from './vuestic-components/va-data-table/VaDataTable.vue'
import VaDivider from './vuestic-components/va-divider/VaDivider'

// TODO: https://github.com/epicmaxco/vuestic-ui/issues/246
// import VaDatePicker from './vuestic-components/va-date-picker/VaDatePicker'

import VaDropdown from './vuestic-components/va-dropdown/VaDropdown'
import VaFileUpload from './vuestic-components/va-file-upload/VaFileUpload'
import VaIcon from './vuestic-components/va-icon/VaIcon'
import VaImage from './vuestic-components/va-image/VaImage'
import VaInnerLoading
  from './vuestic-components/va-inner-loading/VaInnerLoading'
import VaInput from './vuestic-components/va-input/VaInput'
import VaItem from './vuestic-components/va-list/VaItem'
import VaItemLabel from './vuestic-components/va-list/VaItemLabel'
import VaItemSection from './vuestic-components/va-list/VaItemSection'
import VaList from './vuestic-components/va-list/VaList'
import VaListLabel from './vuestic-components/va-list/VaListLabel'
import VaListSeparator from './vuestic-components/va-list/VaListSeparator'
import VaMediumEditor
  from './vuestic-components/va-medium-editor/VaMediumEditor.vue'
import VaModal from './vuestic-components/va-modal/VaModal.vue'
import VaNavbar from './vuestic-components/va-navbar/VaNavbar'
import VaNotification
  from './vuestic-components/va-notification/VaNotification.vue'
import VaPagination from './vuestic-components/va-pagination/VaPagination.vue'
import VaPopover from './vuestic-components/va-popover/VaPopover.vue'
import VaPopup
  from './vuestic-components/va-popup/popup/VaPopup.vue'
import VaProgressBar
  from './vuestic-components/va-progress-bar/progress-types/VaProgressBar.vue'
import VaProgressCircle
  from './vuestic-components/va-progress-bar/progress-types/VaProgressCircle.vue'
import VaRadio from './vuestic-components/va-radio/VaRadio'
import VaRating from './vuestic-components/va-rating/VaRating'
import VaScrollbar from './vuestic-components/va-scrollbar/VaScrollbar.vue'
import VaSelect from './vuestic-components/va-select/VaSelect.vue'
import VaSeparator from './vuestic-components/va-card/VaSeparator'
import VaSidebar from './vuestic-components/va-sidebar/VaSidebar'
import VaSidebarLink from './vuestic-components/va-sidebar/VaSidebarLink'
import VaSidebarLinkGroup from './vuestic-components/va-sidebar/VaSidebarLinkGroup'
import VaSlider from './vuestic-components/va-slider/VaSlider.vue'
import VaTab from './vuestic-components/va-tabs/VaTab.vue'
import VaTabs from './vuestic-components/va-tabs/VaTabs.vue'
import VaTimeline from './vuestic-components/va-timeline/VaTimeline'
import VaTimelineItem from './vuestic-components/va-timeline/VaTimelineItem'
import VaSwitch from './vuestic-components/va-switch/VaSwitch.vue'
import VaTreeCategory from './vuestic-components/va-tree-view/VaTreeCategory'
import VaTreeNode from './vuestic-components/va-tree-view/VaTreeNode'
import VaTreeRoot from './vuestic-components/va-tree-view/VaTreeRoot'
import VaInputWrapper from './vuestic-components/va-input/VaInputWrapper'

import Toasted from './vuestic-mixins/VuesticToasted'

import StickyScroll from './vuestic-directives/StickyScroll'
import VaButtonDropdown from './vuestic-components/va-button-dropdown/VaButtonDropdown'
import { installPlatform } from './vuestic-components/va-popup/install'
import { DropdownPopperPlugin } from './vuestic-components/va-dropdown/dropdown-popover-subplugin'

import { BusPlugin } from 'vue-epic-bus'
import { registerVuesticObject } from './resize-events'
import VaSimplePalettePicker
  from './vuestic-components/va-color-picker/VaSimplePalettePicker'
import VaColorSquare from './vuestic-components/va-color-picker/VaColorSquare'
import VaSliderColorPicker
  from './vuestic-components/va-color-picker/VaSliderColorPicker'
import VaAdvancedColorPicker
  from './vuestic-components/va-color-picker/VaAdvancedColorPicker'
import VaColorPickerInput
  from './vuestic-components/va-color-picker/VaColorPickerInput'
import VaPaletteCustom
  from './vuestic-components/va-color-picker/VaPaletteCustom'
import VaForm
  from './vuestic-components/va-form/VaForm'
import VaOptionList
  from './vuestic-components/va-option-list/VaOptionList'

installPlatform()

const VuesticPlugin = {
  install (Vue) {
    [
      VaAccordion,
      VaAffix,
      VaAvatar,
      VaBadge,
      VaButton,
      VaButtonGroup,
      VaButtonToggle,
      VaBreadcrumbs,
      VaBreadcrumbsItem,
      VaCard,
      VaCardContent,
      VaCardTitle,
      VaCheckbox,
      VaCollapse,
      VaContent,
      VaDataTable,
      // TODO: https://github.com/epicmaxco/vuestic-ui/issues/246
      // VaDatePicker,
      VaDropdown,
      VaFileUpload,
      VaIcon,
      VaImage,
      VaInnerLoading,
      VaInput,
      VaInputWrapper,
      VaItem,
      VaItemLabel,
      VaItemSection,
      VaList,
      VaListLabel,
      VaListSeparator,
      VaMediumEditor,
      VaModal,
      VaNavbar,
      VaNotification,
      VaPagination,
      VaPopover,
      VaPopup,
      VaProgressBar,
      VaProgressBar,
      VaProgressCircle,
      VaRadio,
      VaRating,
      VaScrollbar,
      VaSelect,
      VaSeparator,
      VaSidebar,
      VaSidebarLink,
      VaSidebarLinkGroup,
      VaSlider,
      VaSwitch,
      VaTab,
      VaTabs,
      VaTimeline,
      VaTimelineItem,
      VaTreeCategory,
      VaTreeNode,
      VaTreeRoot,
      VaInnerLoading,
      VaSimplePalettePicker,
      VaColorSquare,
      VaSliderColorPicker,
      VaAdvancedColorPicker,
      VaColorPickerInput,
      VaPaletteCustom,
      VaButtonDropdown,
      VaForm,
      VaDivider,
      VaOptionList,
    ].forEach(component => {
      Vue.component(component.name, component)
    })

    registerVuesticObject(Vue)

    Vue.use(BusPlugin)

    Vue.use(DropdownPopperPlugin)

    Vue.mixin(Toasted)

    Vue.directive('sticky-scroll', StickyScroll)
  },
}

export default VuesticPlugin
