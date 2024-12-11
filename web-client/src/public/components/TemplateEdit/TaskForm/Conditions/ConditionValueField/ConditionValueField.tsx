import * as React from 'react';
import classnames from 'classnames';
import { useIntl } from 'react-intl';

import { DropdownList } from '../../../../UI/DropdownList';
import { EExtraFieldType, IExtraFieldSelection } from '../../../../../types/template';
import { isArrayWithItems } from '../../../../../utils/helpers';
import { Field } from '../../../../Field';
import { EUserStatus, TUserListItem } from '../../../../../types/user';
import { TTaskVariable } from '../../../types';
import { getUserFullName } from '../../../../../utils/users';
import { EConditionOperators, TConditionRule } from '../types';
import { OPERATORS_WITHOUT_VALUE } from '..';
import { DatePicker } from '../../../../UI/form/DatePicker';
import { toTspDate } from '../../../../../utils/dateTime';

import styles from '../Conditions.css';

interface IConditionValueFieldProps {
  variable: TTaskVariable | null;
  rule: TConditionRule;
  users: TUserListItem[];
  operator?: EConditionOperators | null;
  isDisabled: boolean;
  changeRuleValue(value: TConditionRule[keyof TConditionRule]): void;
}

export function ConditionValueField({
  variable,
  operator,
  rule,
  users,
  isDisabled,
  changeRuleValue,
}: IConditionValueFieldProps) {
  if (!variable || !operator) return null;

  const isNoValueOperator = OPERATORS_WITHOUT_VALUE.includes(operator);

  if (isNoValueOperator) return null;

  const { formatMessage } = useIntl();

  const renderMap: { [key in EExtraFieldType]: () => React.ReactNode } = {
    [EExtraFieldType.String]: renderTextField,
    [EExtraFieldType.Text]: renderTextField,
    [EExtraFieldType.Url]: renderTextField,
    [EExtraFieldType.Checkbox]: renderDropdownField,
    [EExtraFieldType.Radio]: renderDropdownField,
    [EExtraFieldType.Creatable]: renderDropdownField,
    [EExtraFieldType.User]: renderUserField,
    [EExtraFieldType.Date]: renderDateField,
    [EExtraFieldType.File]: () => null,
  };

  function renderTextField() {
    return (
      <Field
        disabled={isDisabled}
        labelClassName={styles['text-field']}
        placeholder={formatMessage({ id: 'templates.conditions.value-placeholder' })}
        value={rule.value!}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
          changeRuleValue(e.target.value);
        }}
      />
    );
  }

  function renderDropdownField() {
    interface IDropdownSelection extends IExtraFieldSelection {
      label: string;
    }

    if (!isArrayWithItems(variable?.selections)) {
      return null;
    }

    const dropdownSelections = variable!.selections.map((selection) => ({ ...selection, label: selection.value }));
    const selectedSelection = dropdownSelections.find((selection) => selection.apiName === rule.value) || null;

    return (
      <DropdownList
        isDisabled={isDisabled}
        isSearchable={false}
        placeholder={formatMessage({ id: 'templates.conditions.value-placeholder' })}
        value={selectedSelection}
        onChange={(option: IDropdownSelection) => {
          changeRuleValue(option.apiName);
        }}
        isClearable={false}
        options={dropdownSelections}
      />
    );
  }

  function renderUserField() {
    interface IDropdownUser extends TUserListItem {
      label: string;
    }

    const activeUsers = users.filter((user) => user.status === EUserStatus.Active);
    const dropdownUsers = activeUsers.map((user) => ({ ...user, label: getUserFullName(user) }));
    const selectedUser = dropdownUsers.find((user) => user.id === Number(rule.value)) || null;

    return (
      <DropdownList
        isDisabled={isDisabled}
        isSearchable={false}
        placeholder={formatMessage({ id: 'templates.conditions.value-placeholder' })}
        value={selectedUser}
        onChange={(option: IDropdownUser) => {
          changeRuleValue(option.id);
        }}
        isClearable={false}
        options={dropdownUsers}
      />
    );
  }

  function renderDateField() {
    const [selectedDate, setSelectedDate] = React.useState<number | null>(rule.value as number);

    const handleChangeDate = (date: Date) => {
      if (!date) {
        changeRuleValue('');
        setSelectedDate(null);

        return;
      }

      const unixTime = toTspDate(date);

      changeRuleValue(unixTime);
      setSelectedDate(unixTime);
    };

    return (
      <DatePicker
        disabled={isDisabled}
        onChange={handleChangeDate}
        placeholderText={formatMessage({ id: 'templates.conditions.value-placeholder' })}
        selected={selectedDate && selectedDate * 1000}
        showPopperArrow={false}
      />
    );
  }

  const conditionValueField = renderMap[variable.type]();

  if (!conditionValueField) return null;

  return (
    <div className={classnames(styles['condition-rule__setting'], styles['condition-rule__value'])}>
      {conditionValueField}
    </div>
  );
}
