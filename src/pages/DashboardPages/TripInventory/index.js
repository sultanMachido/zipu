import React from 'react';
import { Divider, Checkbox } from 'antd';
import { ImPencil } from 'react-icons/all'
import './styles.scss';
import { SubmitButton } from '../../../components/FormField';
import EmptyScreen from '../../../components/EmptyScreen';
import { TerminalsList } from '../../../utils/constants/TerminalList';
import { StatusList } from '../../../utils/constants/StatusList';
import { useQuery } from '../../../utils/URLSearchParam';
import { CategoriesList } from '../../../utils/constants/CategoryList'
import { TripData } from '../../../utils/constants/TripInventoryList';
import TripDataComponent from './TripData';

const CheckboxGroup = Checkbox.Group;
const defaultCheckedList = [''];

const TripInventory = (props) => {
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);

  let query = useQuery();

  const currentCategory = query.get('category');

  const onChangeTerminals = list => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < TerminalsList.length);
    setCheckAll(list.length === TerminalsList.length);
  };

  const onCheckAllChangeTerminals = e => {
    setCheckedList(e.target.checked ? TerminalsList : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const onChangeStatus = list => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < StatusList.length);
    setCheckAll(list.length === StatusList.length);
  };

  const onCheckAllChangeStatus = e => {
    setCheckedList(e.target.checked ? StatusList : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  React.useEffect(() => {
    props.history.push(`/trip-inventory?category=${query.get('category') || 'small'}`)
  }, [query.get('category')]);

  const changeCategory = (category) => {
    query.set('category', category.path)
    props.history.push(`/trip-inventory?category=${query.get('category')}`)
  }


  return (
    <div className="tripInventoryWrapper">
      <div className="tripInventoryHeader">
        <h5 className="title">Availiable Listing</h5>
      </div>

      <div className="tripInventoryContent">
        <div className="contentSidebar">
          <div className="emptyContent">

          </div>
          <div className="btnWrapper">
            {
              SubmitButton('ADD NEW TRIPS')
            }
          </div>
          <div className="terminalsWrapper">
            <p className="terminalsTitle">Terminals</p>
            <div>
              <Checkbox indeterminate={indeterminate} onChange={onCheckAllChangeTerminals} checked={checkAll}>
                All
              </Checkbox>
              <CheckboxGroup options={TerminalsList} value={checkedList} onChange={onChangeTerminals} layout="vertical" />
            </div>
          </div>
          <Divider />
          <div className="statusWrapper">
            <p className="statusTitle">Status</p>
            <div>
              <Checkbox indeterminate={indeterminate} onChange={onCheckAllChangeStatus} checked={checkAll}>
                All
              </Checkbox>
              <CheckboxGroup options={StatusList} value={checkedList} onChange={onChangeStatus} layout="vertical" />
            </div>
          </div>
          <Divider />
        </div>
        <div className="contentMain">
          <div className="contentHeader">
            {
              CategoriesList.map((category) => {
                return (
                  <div
                    key={category.id}
                    className={`categoryWrapper ${category.path === currentCategory ? 'active' : ''}`}
                    onClick={() => changeCategory(category)}
                  >
                    {category.name}
                  </div>
                )
              })
            }
          </div>

          {
            TripData.length === 0
              ?
              <EmptyScreen
                icon={<ImPencil />}
                title="List is empty"
                subText="When you add a trip, they will appear here"
                buttonText="ADD TRIPS"
              />
              :
              TripData.map((data) => {
                return (data && data.carCategory === currentCategory && (<TripDataComponent data={data} key={data.id} />))
              })
          }


        </div>
      </div>
    </div>
  )
}

export default TripInventory;