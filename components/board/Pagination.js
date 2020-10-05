import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import pagination from '../../styles/pagination';

class Pagination extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {curPage, lastPage, startPage, paging} = this.props;
        let pageArr = [];

        for(let page = startPage; page <= lastPage; page++) {
            pageArr.push(page)
        }

        return (
            pageArr.map((page, key) => (
                <TouchableOpacity
                    key={key}
                    onPress={() => {
                        paging(page);
                    }}
                >
                    <Text style={page === curPage ? pagination.paginationItemActive : pagination.paginationItem}>{page}</Text>
                </TouchableOpacity>
            ))
        );
    }
}

export default Pagination;
