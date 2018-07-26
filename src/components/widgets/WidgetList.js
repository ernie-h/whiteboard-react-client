import React from 'react';
import {LinkWidget} from './LinkWidget';
import {HeadingWidget} from './HeadingWidget';
import {ListWidget} from './ListWidget';
import {YouTubeWidget} from './YouTubeWidget';
import {ParagraphWidget} from './ParagraphWidget';
import {ImageWidget} from './ImageWidget'

const WidgetList = ({topicId, widgets, saveWidgets, findAllWidgetsForTopic,  deleteWidget, createWidget, updateWidget}) => {
  let widgetTitle;
  let widget_type;
  console.log('topicid ' + topicId);
  //findAllWidgetsForTopic(topicId);
  let widgetsForTopic = (topicId) => {
    findAllWidgetsForTopic(topicId);
  }

  return (<div className="bg-secondary rounded">
    <button className="btn btn-primary float-right" onClick={saveWidgets}>
      Save</button>
    <h1>Widget List: ({widgets.length})</h1>

    <ul className="list-group text-dark">
      <li className="list-group-item">
        <h3> Add Widget: </h3>
        <div className="form-inline">
        <input ref={node => widgetTitle = node} className="form-control"/>
        <button className="btn btn-success float-right" onClick={() => {
            let widget = {
              title: widgetTitle.value,
              id: (new Date()).getTime(),
              widget_type: widget_type.value,
              // CAN MOVE THESE TO A SEPARATE CREATE FUNCTION THAT CREATES Widget BASED ON TYPE
              ordered: false,
              listItems: '',
              src: ''
            };
            widgetTitle.value = '';
            createWidget(widget);
          }}>
          Add Widget
        </button>
      </div>
        <select ref={node => widget_type = node} className="form-control">
          <option value="LINK">Link Widget</option>
          <option value="PARAGRAPH">Paragraph Widget</option>
          <option value="IMAGE">Image Widget</option>
          <option value="HEADING">HEADING</option>
          <option value="LIST">LIST</option>
          <option value="YOUTUBE">YOUTUBE</option>
        </select>
      </li>

      {
        widgets.map((widget, index) => <li className="list-group-item text-dark" key={index}>
          {widget.title}
          ({widget.id}) - {widget.widget_type}
          <button className="float-right btn btn-danger" onClick={() => deleteWidget(widget.id)}>
            Delete
          </button>
          <div>
            {widget.widget_type === 'YOUTUBE' && <YouTubeWidget widget={widget} updateWidget={updateWidget}/>}
            {widget.widget_type === 'LIST' && <ListWidget widget={widget} updateWidget={updateWidget}/>}
            {widget.widget_type === 'HEADING' && <HeadingWidget widget={widget} updateWidget={updateWidget}/>}
            {widget.widget_type === 'LINK' && <LinkWidget widget={widget} updateWidget={updateWidget}/>}
            {widget.widget_type === 'PARAGRAPH' && <ParagraphWidget widget={widget} updateWidget={updateWidget}/>}
            {widget.widget_type === 'IMAGE' && <ImageWidget widget={widget} updateWidget={updateWidget}/>}
          </div>
        </li>)
      }
    </ul>
  </div>);
};

export default WidgetList;
