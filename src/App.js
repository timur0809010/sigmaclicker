import React, { useState, useEffect } from 'react';
import './App.css';
import clickImage from './assets/click-image.jpg';  // Импорт изображения
import energyIcon from './assets/energy-icon.png';  // Картинка для энергии

function App() {
  const [score, setScore] = useState(0); // Состояние для счёта
  const [clickValue, setClickValue] = useState(1); // Сколько монет даёт один клик
  const [upgradeCost, setUpgradeCost] = useState(10); // Стоимость улучшения
  const [level, setLevel] = useState(1); // Уровень прокачки
  const [energy, setEnergy] = useState(100); // Энергия
  const [maxEnergy, setMaxEnergy] = useState(100); // Максимум энергии
  const [energyRegen, setEnergyRegen] = useState(5); // Сколько энергии восстанавливается каждую секунду
  const [isClickBlocked, setIsClickBlocked] = useState(false); // Заблокирован ли клик
  const [activeTab, setActiveTab] = useState('clicking'); // Текущая активная вкладка: 'clicking' или 'upgrades'

  // Таймер для восстановления энергии
  useEffect(() => {
    const energyTimer = setInterval(() => {
      if (energy < maxEnergy) {
        setEnergy((prevEnergy) => Math.min(prevEnergy + energyRegen, maxEnergy)); // Восстановление энергии
      }
    }, 1000);

    return () => clearInterval(energyTimer); // Очистить таймер при размонтировании компонента
  }, [energy, energyRegen, maxEnergy]);

  // Обработчик клика по изображению
  const handleImageClick = () => {
    if (energy > 0 && !isClickBlocked) {
      setScore(score + clickValue);
      setEnergy(energy - 1); // Тратить 1 очко энергии за клик

      // Если энергия заканчивается, блокируем возможность кликов
      if (energy - 1 === 0) {
        setIsClickBlocked(true);
        setTimeout(() => setIsClickBlocked(false), 3000); // Блокируем клики на 3 секунды
      }
    }
  };

  // Обработчик для улучшения коэффициента монет
  const handleUpgrade = () => {
    if (score >= upgradeCost) {
      setScore(score - upgradeCost); // Уменьшаем счёт на стоимость улучшения
      setClickValue(clickValue + 1); // Увеличиваем количество монет за клик
      setLevel(level + 1); // Увеличиваем уровень
      // Увеличиваем стоимость улучшения в 2 раза
      setUpgradeCost(Math.floor(upgradeCost * 2)); // Увеличиваем стоимость улучшения
    } else {
      alert('Не хватает сигма-коинов для улучшения!');
    }
  };

  // Обработчики прокачки энергии
  const handleEnergyUpgrade = () => {
    if (score >= 50) {  // Прокачка ёмкости энергии
      setScore(score - 50);  // Стоимость улучшения ёмкости
      setMaxEnergy(maxEnergy + 50); // Увеличиваем максимальный запас энергии
    } else {
      alert('Не хватает сигма-коинов для прокачки ёмкости энергии!');
    }
  };

  const handleEnergyRegenUpgrade = () => {
    if (score >= 100) {  // Прокачка восстановления энергии
      setScore(score - 100);  // Стоимость улучшения восстановления
      setEnergyRegen(energyRegen + 5); // Увеличиваем восстановление энергии
    } else {
      alert('Не хватает сигма-коинов для прокачки восстановления энергии!');
    }
  };

  return (
    <div className="App">
      <h1>Кликай сигму - получай TON</h1>

      {/* Энергия */}
      <div className="energy-board">
        <img src={energyIcon} alt="Energy" className="energy-icon" />
        <p>Энергия: <span>{energy}</span>/{maxEnergy}</p>
      </div>

      {/* Переключение вкладок */}
      <div className="tab-buttons">
        <button
          className={activeTab === 'clicking' ? 'active-tab' : ''}
          onClick={() => setActiveTab('clicking')}
        >
          Кликай
        </button>
        <button
          className={activeTab === 'upgrades' ? 'active-tab' : ''}
          onClick={() => setActiveTab('upgrades')}
        >
          Прокачки
        </button>
      </div>

      {/* Вкладка с кликами */}
      {activeTab === 'clicking' && (
        <div className="clicking-tab">
          <div className="score-board">
            <p>Сигма-коинов: <span>{score}</span></p>
          </div>

          <div className="image-container">
            <img
              src={clickImage} // Путь к картинке
              alt="Кликни меня!"
              className="clickable-image"
              onClick={handleImageClick}
            />
          </div>
        </div>
      )}

      {/* Вкладка с прокачками */}
      {activeTab === 'upgrades' && (
        <div className="upgrades-tab">
          <div className="upgrade-container">
            <button onClick={handleUpgrade}>
              Прокачать (Стоимость: {upgradeCost} монет) - Сейчас: {clickValue} монет за клик
            </button>
            <p>Уровень прокачки: {level}</p>
          </div>

          <div className="energy-upgrades">
            <button onClick={handleEnergyUpgrade}>
              Прокачать ёмкость энергии (50 монет)
            </button>
            <button onClick={handleEnergyRegenUpgrade}>
              Прокачать восстановление энергии (100 монет)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
