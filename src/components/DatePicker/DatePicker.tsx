/** @jsxImportSource @emotion/react */
import React from 'react';
import { DarkColorType, LightColorType } from '../../styles/colors';
import createStyle from './styles';

export interface DatePickerProps {
  color?: LightColorType | DarkColorType;
}

const DatePicker: React.FC<DatePickerProps> = ({ color }) => {
  return (
    <article className="calendar" css={createStyle(color)}>
      <header className="calendar-header">
        <span className="month-picker" id="month-picker">
          January
        </span>
        <div className="year-picker">
          <span className="year-change" id="prev-year">
            &lt;
          </span>
          <span className="year">2022</span>
          <span className="year-change" id="next-year">
            &gt;
          </span>
        </div>
      </header>
      <section className="calendar-body">
        <div className="calendar-week-day">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="calendar-days">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
        </div>
      </section>
      <footer className="calendar-footer">
        <div className="toggle">
          <span>Dark Mode</span>
          <div className="dark-mode-switch">
            <div className="dark-mode-switch-ident"></div>
          </div>
        </div>
      </footer>
      <div className="month-list"></div>
    </article>
  );
};

export default DatePicker;
