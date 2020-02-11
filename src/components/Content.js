import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators';

class Content extends React.Component {
	renderItem = completed => {
		const { list, changeCheckboxAction, delItemAction } = this.props;
		return list.filter(item => item.completed === completed).map(item =>
			<li key={item.id}>
				<input type="checkbox" checked={completed} onChange={changeCheckboxAction} data-id={item.id} />
				<p>
					{item.title}
				</p>
				<i data-id={item.id} onClick={delItemAction} />
			</li>
		);
	};
	componentDidMount() {
		this.props.getListAction();
	}
	render() {
		return (
			<section>
				<h2>
					正在进行 <span id="todocount">{this.renderItem(false).length}</span>
				</h2>
				<ol id="todolist" className="demo-box">
					{this.renderItem(false)}
				</ol>
				<h2>
					已经完成 <span id="donecount">{this.renderItem(true).length}</span>
				</h2>
				<ul id="donelist">
					{this.renderItem(true)}
				</ul>
			</section>
		);
	}
}
const mapStateToProps = state => ({
	list: state.list
});

export default connect(mapStateToProps, actionCreators)(Content);
