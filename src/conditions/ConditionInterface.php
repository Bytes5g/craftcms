<?php

namespace craft\conditions;

use Illuminate\Support\Collection;
use yii\base\InvalidArgumentException;

/**
 * ConditionInterface defines the common interface to be implemented by condition classes.
 *
 * A base implementation is provided by [[BaseCondition]].
 *
 * @author Pixel & Tonic, Inc. <support@pixelandtonic.com>
 * @since 4.0.0
 */
interface ConditionInterface
{
    /**
     * Renders the HTML for the condition builder, including its outer container element.
     *
     * @param array $options The builder options
     * @return string
     */
    public function getBuilderHtml(array $options = []): string;

    /**
     * Renders the inner HTML for the condition builder, excluding its outer container element.
     *
     * @param array $options The builder options
     * @return string
     */
    public function getBuilderInnerHtml(array $options = []): string;

    /**
     * Returns the condition’s portable config.
     *
     * @return array
     */
    public function getConfig(): array;

    /**
     * Returns the available rule types for this condition.
     *
     * Rule types should be defined as either the class name or an array with a `class` key set to the class name.
     *
     * @return string[]|array{class: string}[]
     */
    public function getConditionRuleTypes(): array;

    /**
     * Sets the available rule types for this condition.
     *
     * @param string[]|array{class: string}[] $conditionRuleTypes
     */
    public function setConditionRuleTypes(array $conditionRuleTypes = []): void;

    /**
     * Returns the rules this condition is configured with.
     *
     * @return ConditionRuleInterface[]
     */
    public function getConditionRules(): array;

    /**
     * Sets the rules this condition should be configured with.
     *
     * @param ConditionRuleInterface[]|array[] $rules
     * @throws InvalidArgumentException if any of the rules are not selectable
     */
    public function setConditionRules(array $rules): void;

    /**
     * Adds a rule to the condition.
     *
     * @param ConditionRuleInterface $rule
     * @throws InvalidArgumentException if the rule is not selectable
     */
    public function addConditionRule(ConditionRuleInterface $rule): void;
}
