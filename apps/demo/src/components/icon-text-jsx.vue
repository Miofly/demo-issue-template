<script lang="tsx" setup>
interface Props {
	text: string
  color: string
}

const {
  text,
  color
} = defineProps<Props>();

defineRender(() => {
  return (
    <div style={{ color }}>{text}</div>
  );
});
</script>

<style lang="scss" scoped>

</style>
