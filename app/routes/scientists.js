import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Maria Curie', 'Mae Jemison', 'Albert Hofmann'];
  }
});
