<template>
  <container>
    <left>
      <div>
        <h1>about toastpack</h1>
        <p>by william horning</p>
      </div>
    </left>
    <right>
      <img src="/logo.svg" />
    </right>
  </container>
  <main>
    <h1 id="about-toastpack">about toastpack</h1>
    <p>Toastpack is a modern package manager for Node.js.</p>
    <h2
      id="background-taken-from-the-original-blog-post-https-williamhorning-notion-site-why-i-m-making-a-package-manager-f515e42b23ce4146be27bd1df6f697b2-"
    >
      Backstory (taken from the
      <a
        href="https://williamhorning.notion.site/Why-I-m-making-a-package-manager-f515e42b23ce4146be27bd1df6f697b2"
        >original blog post</a
      >)
    </h2>
    <p>
      This whole thing started February 6, 2022 14:31 EST, when I sent this
      message in the Cloudflare Developers Discord server:
    </p>
    <p>
      <img
        src="https://media.discordapp.net/attachments/906864419877830666/949754476854669463/unknown.png?width=475&height=68"
        alt="Join the Cloudflare Workers Discord server at [https://discord.gg/cloudflaredev](https://discord.gg/cloudflaredev)"
      />
    </p>
    <p>
      <i
        >Join the Cloudflare Workers Discord server at
        <a href="https://discord.gg/cloudflaredev"
          >https://discord.gg/cloudflaredev</a
        ></i
      >
    </p>
    <p>
      After a while, I decided to jump in and think of how my packager would
      work, with other people joining in.
    </p>
    <p>
      <img
        src="https://cdn.discordapp.com/attachments/940061326057816074/940061429581627402/unknown.png"
        alt="git-started is copyright Isaac McFadyen"
      />
    </p>
    <p><i>git-started is copyright Isaac McFadyen</i></p>
    <p>
      These ideas all came about because of why I wanted to make a package
      manager:
    </p>
    <ol>
      <li>ESM based core</li>
      <li>ESM first package source</li>
      <li>Lockfile-less design</li>
      <li>Plugin system</li>
      <li>Compatibility with other tools / Multiple sources</li>
      <li>Smaller footprint</li>
    </ol>
    <h2 id="development">Development</h2>
    <p>
      Development started at 17:00 EST the same day. Me and Isaac were working
      on ideas for the project, and eventually got a list of ideas:
    </p>
    <ol>
      <li>Core</li>
      <li><del>Plugin system</del></li>
      <li>Our own ESM first package source</li>
      <li>NPM package support plugin</li>
      <li>Maybe deno.land/x support plugin?</li>
      <li><del>Name this</del></li>
    </ol>
    <p>
      Over the next few days, we worked on some of these ideas. The project is
      still in development, but we&#39;re actively working on it. If you want to
      help out, or ask questions, feel free to join my Discord server at
      <a href="https://discord.gg/XRzwMMcAB7">https://discord.gg/XRzwMMcAB7</a>.
    </p>
  </main>
</template>
