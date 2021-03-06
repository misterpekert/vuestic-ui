<template>
  <div class="va-input-wrapper">
    <div class="va-input-wrapper__control">
      <div class="va-input-wrapper__slot">
        <div
          v-if="$slots.prepend"
          class="va-input-wrapper__prepend-inner"
        >
          <slot name="prepend" />
        </div>
        <div class="va-input-wrapper__content">
          <slot />
          <div class="va-input-wrapper__details py-0 px-2">
            <va-message-list
              :color="messagesColor"
              :value="messagesComputed"
              :limit="errorLimit"
            />
          </div>
        </div>
        <div
          v-if="$slots.append"
          class="va-input-wrapper__append-inner"
        >
          <slot name="append" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VaMessageList from './VaMessageList'
import { makeContextablePropsMixin } from '../../context-test/context-provide/ContextPlugin'

const InputWrapperContextMixin = makeContextablePropsMixin({
  disabled: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  success: {
    type: Boolean,
    default: false,
  },
  messages: {
    type: Array,
    default: () => [],
  },
  errorMessages: {
    type: Array,
    default: () => [],
  },
  errorCount: {
    type: Number,
    default: 1,
  },
})

export default {
  name: 'VaInputWrapper',
  components: { VaMessageList },
  mixins: [InputWrapperContextMixin],
  computed: {
    messagesComputed () {
      return this.c_error ? this.c_errorMessages : this.messages
    },
    messagesColor () {
      return (this.c_error && 'danger') || (this.c_success && 'success') || ''
    },
    errorLimit () {
      return this.c_error ? this.c_errorCount : 99
    },
  },
}
</script>

<style lang='scss'>
@import '../../vuestic-sass/resources/resources';

.va-input-wrapper {
  display: flex;
  flex: 1 1 auto;
  align-items: flex-end;
  font-size: 1rem;
  text-align: left;

  &__control,
  &__content {
    width: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__prepend-inner,
  &__append-inner {
    display: inline-flex;
    align-items: center;
  }

  &__prepend-inner {
    margin-right: 0.5rem;
  }

  &__append-inner {
    margin-left: 0.5rem;
  }

  &__slot {
    display: inline-flex;
    position: relative;
  }

  &__details {
    padding: 0 0.5rem;
    width: 100%;
  }

  &__messages__wrapper {
    font-size: 0.875rem;
  }

  .va-select {
    margin-bottom: 0;
  }
}
</style>
