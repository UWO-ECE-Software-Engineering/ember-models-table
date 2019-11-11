import {layout as templateLayout} from '@ember-decorators/component';
import Component from '@ember/component';
import {action} from '@ember/object';
import layout from '../templates/components/custom-row-group-toggle';

export default
@templateLayout(layout)
class CustomRowGroupToggleComponent extends Component {

  @action
  doToggleGroupedRows() {
    this.toggleGroupedRows(this.groupedValue);
  }

  @action
  doToggleGroupedRowsSelection(e) {
    this.toggleGroupedRowsSelection(this.groupedValue);
    e.stopPropagation();
  }

  @action
  doToggleGroupedRowsExpands(e) {
    this.toggleGroupedRowsExpands(this.groupedValue);
    e.stopPropagation();
  }
}
