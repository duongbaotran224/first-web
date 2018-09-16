export default () => {
    const val_ = () => Math.floor(Math.random() * 255)
    return `rgba(${val_()}, ${val_()}, ${val_()}, 0.2)`
  }