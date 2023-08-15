<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <span>版权 © 2023 Mxz'blog</span>
        <span>备案号：粤ICP备12345678号</span>
      </div>
      <div class="footer-right">
        <span>作者：Mxz</span>
        <span>联系邮箱：mxz199771@163.com</span>
      </div>
    </div>
  </footer>
</template>

<style lang="less" scoped>
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 20px 0;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.footer-left,
.footer-right {
  display: flex;
  flex-direction: column;
}

.footer-left span,
.footer-right span {
  margin-bottom: 10px;
  font-size: 14px;
}
</style>
