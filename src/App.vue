<template>
  <nav>
    <left>
      <img src="/logo.svg" />
      <router-link to="/">toastpack</router-link>
      <p></p>
      <router-link to="/about">about</router-link>
    </left>
    <right>
      <a href="https://github.com/toastpack">
        <img src="/github.svg" />
      </a>
      <a href="https://discord.gg/XRzwMMcAB7">
        <img src="/discord.svg" />
      </a>
    </right>
  </nav>
  <router-view />
</template>
