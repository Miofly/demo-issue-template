<script setup lang="tsx">
import { type CSSProperties, useSlots, computed } from 'vue';
import { addUnit, isNullOrUndefined, isNumber } from '@vft/utils';
import { VNode } from '@vft/utils';
import { useNamespace } from '../../use';
import { type BadgePosition } from './types';

interface BadgeProps {
  dot?: boolean;
  isIcon?: boolean;
  max?: Numberish;
  color?: string;
  offset?: Numberish[];
  content?: Numberish;
  showZero?: boolean;
  position?: BadgePosition;
}

const { showZero = true, content, dot, max, color, offset, isIcon, position = 'top-right' } = defineProps<BadgeProps>();

const ns = /* hoist-static*/ useNamespace('badge');

defineOptions({
	name: ns.b()
});

const slots = useSlots();

// 是否有 content
const hasContent = () => {
  if (slots.content) {
    return true;
  }
  return !isNullOrUndefined(content) && content !== '' && (showZero || content !== 0);
};

// content 内容
const renderContent = () => {
  if (!dot && hasContent()) {
    if (slots.content) {
      return slots.content();
    }

    if (!isNullOrUndefined(max) && isNumber(+content!) && +content! > +max!) {
      return `${max}+`;
    }

    return content;
  }
};

const style = computed(() => {
  const _style: CSSProperties = {
    background: color
  };

  if (offset) {
    const [x, y] = offset;
    if (slots.default) {
      _style.top = addUnit(y);

      if (typeof x === 'number') {
        _style.right = addUnit(-x);
      } else {
        _style.right = x.startsWith('-') ? x.replace('-', '') : `-${x}`;
      }
    } else {
      _style.marginTop = addUnit(y);
      _style.marginLeft = addUnit(x);
    }
  }

  return _style;
});

const renderBadgeCon = () => {
  if (hasContent() || dot) {
    return (
      <div class={[ns.m(position), { dot: dot, fixed: !!slots.default }]} style={style.value}>
        {renderContent()}
      </div>
    );
  }
};

const renderBadge = () => {
  if (slots.default) {
    return isIcon ? (
      <i class={ns.e('wrapper')}>
        {slots.default()}
        {renderBadgeCon()}
      </i>
    ) : (
      <div class={ns.e('wrapper')}>
        {slots.default()}
        {renderBadgeCon()}
      </div>
    );
  }

  return renderBadgeCon();
};
</script>

<template>
  <VNode :content="renderBadge()" />
</template>

<style lang="scss">
@import './index.scss';
</style>
