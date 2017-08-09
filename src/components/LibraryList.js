import React, { Component } from 'react';
import { ListView } from 'react-native0;'
import { connect } from 'react-redux';

 class LibraryList extends Component {
   componentWillMount() {
     const ds = new ListView.DataSource({
       rowHasChanged: (r1, r2) => r1 !== r2
     });

     this.dataSorce = ds.cloneWithRows(this.props.libraries);
   }

   renderRow {
     
   }

   render() {
     return (
       <ListView
         dataSorce={this.dataSorce}
         renderRow={this.renderRow}
       />
     );
   }
 }

 const mapStateToProps = state => {
   return { libraries: state.libraries };
 };

export default connect(mapStateToProps)(LibraryList);
