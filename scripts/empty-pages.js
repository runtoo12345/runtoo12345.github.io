'use strict';

// Hexo does not emit the home or archive route when there are no posts.
// The theme menu still links to both, so publish them only while the site is empty.
hexo.extend.generator.register('empty-home', function (locals) {
  const posts = locals.index_posts || locals.posts;
  if (posts && posts.length) return;

  return {
    path: '',
    layout: 'index',
    data: {
      __index: true,
      posts,
      base: '',
      total: 1,
      current: 1
    }
  };
});

hexo.extend.generator.register('empty-archive', function (locals) {
  const posts = locals.posts;
  if (posts && posts.length) return;

  return {
    path: 'archives/',
    layout: 'archive',
    data: {
      archive: true,
      posts,
      base: 'archives/',
      total: 1,
      current: 1
    }
  };
});
