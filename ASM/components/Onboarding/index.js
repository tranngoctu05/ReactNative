import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const DrinkCard = ({ drink, onCustomize }) => {
    return (
        <TouchableOpacity style={styles.drinkCard} onPress={onCustomize}>
            <Image source={{ uri: drink.image }} style={styles.drinkImage} />
            <Text style={styles.drinkName}>{drink.name}</Text>
        </TouchableOpacity>
    );
};

const ToppingSelector = ({ toppings, onSelect }) => {
    return (
        <View style={styles.toppingSelector}>
            {toppings.map((topping) => (
                <TouchableOpacity
                    key={topping.id}
                    style={styles.toppingButton}
                    onPress={() => onSelect(topping)}
                >
                    <Image source={{ uri: topping.image }} style={styles.toppingImage} />
                    <Text style={styles.toppingName}>{topping.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const CustomizationScreen = ({ drink, onClose }) => {
    const [selectedToppings, setSelectedToppings] = useState([]);

    const handleToppingSelect = (topping) => {
        if (selectedToppings.includes(topping)) {
            setSelectedToppings(selectedToppings.filter((t) => t.id !== topping.id));
        } else {
            setSelectedToppings([...selectedToppings, topping]);
        }
    };

    return (
        <View style={styles.customizationScreen}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            <Text style={styles.customizationTitle}>Customize your {drink.name}</Text>
            <ToppingSelector
                toppings={drink.toppings}
                onSelect={handleToppingSelect}
            />
            <Text style={styles.selectedToppings}>
                Selected toppings: {selectedToppings.map((t) => t.name).join(', ')}
            </Text>
        </View>
    );
};

const DrinksScreen = () => {
    const [selectedDrink, setSelectedDrink] = useState(null);

    const handleDrinkSelect = (drink) => {
        setSelectedDrink(drink);
    };

    return (
        <View style={styles.drinksScreen}>
            {selectedDrink ? (
                <CustomizationScreen drink={selectedDrink} onClose={() => setSelectedDrink(null)} />
            ) : (
                <View>
                    <DrinkCard drink={{ id: 1, name: 'Cappuccino', image: 'https://example.com/cappuccino.jpg' }} onCustomize={() => handleDrinkSelect({ id: 1, name: 'Cappuccino', toppings: [{ id: 1, name: 'Cinnamon', image: 'https://example.com/cinnamon.jpg' }, { id: 2, name: 'Chocolate', image: 'https://example.com/chocolate.jpg' },] })} />
                    <DrinkCard drink={{ id: 2, name: 'Latte', image: 'https://example.com/latte.jpg' }} onCustomize={() => handleDrinkSelect({ id: 2, name: 'Latte', toppings: [{ id: 1, name: 'Cinnamon', image: 'https://example.com/cinnamon.jpg' }, { id: 3, name: 'Vanilla', image: 'https://example.com/vanilla.jpg' },] })} />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    drinksScreen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    drinkCard: {
        width: 200,
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
        margin: 10,
    },
    drinkImage: {
        width: '100%',
        height: '100%',
    },
    drinkName: {
        textAlign: 'center',
        paddingTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    toppingSelector: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 20, },
    toppingButton: { width: '30%', height: 100, alignItems: 'center', justifyContent: 'center', marginBottom: 10, borderRadius: 5, backgroundColor: '#f2f2f2', },
    toppingImage: { width: 50, height: 50, marginBottom: 5, },
    toppingName: { textAlign: 'center', fontSize: 14, },
    customizationScreen: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', padding: 20, },
    closeButton: { position: 'absolute', top: 20, right: 20, padding: 10, backgroundColor: '#f2f2f2', borderRadius: 5, },
    closeButtonText: { fontSize: 16, fontWeight: 'bold', },
    customizationTitle: { fontSize: 24, fontWeight: 'bold', marginTop: 20, },
    selectedToppings: { fontSize: 16, marginTop: 20, },
});

export default DrinksScreen;
