import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | models table/themes/semanticui/select', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`<ModelsTable::Themes::Semanticui::Select/>`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <ModelsTable::Themes::Semanticui::Select>
        template block text
      </ModelsTable::Themes::Semanticui::Select>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
